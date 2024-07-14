import e, { urlencoded } from "express";
import supertest from "supertest";

const testServer = (route) => {
  const app = e();
  app.use(e.json());
  app.use(e({ urlencoded: true }));
  route(app);
  return supertest(app);
};

export default testServer;
