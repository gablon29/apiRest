import routeAplication from "../routes/index.js";
import testServer from "../utils/testserver.js";

const req = testServer(routeAplication);
const user = {
  name: "juan",
  cityId: 1,
};
const userFail = {
  name: "",
  cityId: 1,
};
describe("Routes", () => {
  describe("Get / request", () => {
    test("should response with a 200 status code", async () => {
      const { status } = await req.get("/api/allAdmins");
      expect(status).toEqual(200);
    });

    test("should response with a 404 status code", async () => {
      const response = await req.get("/api/users:id").send();
      expect(response.statusCode).toBe(404);
    });

    test("Deberia mostrarme {msg: hola}", async () => {
      const response = await req.get("/api/allUsers");
      expect(response.body).toEqual({ msj: "hola" });
    });

    test("should view data api aws", async () => {
      const response = await req.get("/api/allProducts");
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
    });

    test("Deberia devolverme un respuesta 200 luego de registrar en la tabla", async () => {
      const response = await req.get("/api/init");
      expect(response.status).toBe(200);
    });

    test("Deberia devolverme un status 200", async () => {
      const response = await req.get("/api/cities/1");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("POST / Request", () => {
    //================================================================================================
    describe("toma valores del body y responde con status 200", () => {
      //--------------------------------------------------------------------------------------------
      test("Deberia responder con un json cuando la op es exitosa", async () => {
        const { body } = await req.post("/api/user_create").send(user);
        expect(body).toBeInstanceOf(Object);
        expect(body).toHaveProperty("msg");
        expect(body.msg).toBe("usuario creado");
      });
      test("Deberia reponder con un 400 cuando no se manda un body", async () => {
        const { status } = await req.post("/api/user_create");
        expect(status).toEqual(500);
      });
      test("Deberia devolver la propiedad que falta", async () => {
        const resG = async (obj) =>
          await req.post("/api/user_create").send(obj);

        const res = await resG(userFail);
        expect(res.status).toBe(500);
      });
    });
  });
});
