import { Router } from "express";


const routerGet = Router();

// funcion comodin para testear cualquier logica
routerGet.get("/", (req, res) => {
  res.send("hola mundo");
});


export default routerGet;
