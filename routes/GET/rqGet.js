import { Router } from "express";


const routerGet = Router();

// funcion comodin para testear cualquier logica
routerGet.get("/user:id", (req, res) => {
  const { id } = req.params;
  console.log(id)
  res.send("hola mundo");
});


export default routerGet;
