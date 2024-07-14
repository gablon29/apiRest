import app from "../app.js";
import request from "supertest";
import { user } from "../utils/userTest.js";

describe("Routes", () => {
  describe("Get request", () => {
    test("should response with a 200 status code", async () => {
      const response = await request(app).get("/user").send();
      expect(response.statusCode).toBe(200);
    });

    test("should response with a 404 status code", async () => {
      const response = await request(app).get("/users:id").send();
      expect(response.statusCode).toBe(404);
    });

    test("Deberia mostrarme un arreglo", async () => {
      const response = await request(app).get("/allUsers");
      expect(response.body).toEqual({ msj: "hola" });
    });
  });
  describe("POST / Request", () => {
    describe("toma valores del body y responde con status 200", () => {
      test("should status 200", async () => {
        const res1 = await request(app).post("/user_create").send(user);
        expect(res1.statusCode).toBe(200);
      });
    });
  });
});
