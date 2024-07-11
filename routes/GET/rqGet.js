import { Router } from "express";

const routerGet = Router();

// funcion comodin para testear cualquier logica
routerGet.get("/user", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("hola mundo");
});

routerGet.route("/allUsers").get((req, res) => {
  res.send([]);
});

export default routerGet;
