import routeAplication from "../routes/index.js";
import testServer from "../utils/testserver.js";
import { user, userFail, userFail2 } from "../utils/userTest.js";

const req = testServer(routeAplication);

describe("Routes", () => {
  describe("Get request", () => {
    test("should response with a 200 status code", async () => {
      const { status } = await req.get("/api/user");
      expect(status).toEqual(200);
    });

    test("should response with a 404 status code", async () => {
      const response = await req.get("/api/users:id").send();
      expect(response.statusCode).toBe(404);
    });

    test("Deberia mostrarme un arreglo", async () => {
      const response = await req.get("/api/allUsers");
      expect(response.body).toEqual({ msj: "hola" });
    });
  });
  describe("POST / Request", () => {
    describe("toma valores del body y responde con status 200", () => {
      test("should status 200", async () => {
        const { status } = await req.post("/api/user_create").send(user);
        expect(status).toBe(200);
      });
      test("Deberia responder con un json cuando la op es exitosa", async () => {
        const { body } = await req.post("/api/user_create").send(user);
        console.log(body);
        expect(body).toEqual({ msg: "usuario creado" });
      });
      test("Deberia reponder con un 400 cuando no se manda un body", async () => {
        const { status } = await req.post("/api/user_create");
        expect(status).toEqual(400);
      });
      test("Deberia devolver la propiedad que falta", async () => {
        const resG = async (obj) =>
          await req.post("/api/user_create").send(obj);

        const res = await resG(userFail);
        const res2 = await resG(userFail2);
        expect(res.body).toBe("La propiedad name esta vacia");
        expect(res2.body).toBe("La propiedad disponible esta vacia");
      });
    });
  });
});
