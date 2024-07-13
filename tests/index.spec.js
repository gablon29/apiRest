import app from "../app.js";
import request from "supertest";

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
      expect(response.body).toBeInstanceOf(Array);
    });
  });
});
