import { Router } from "express";

const router = Router();

router
  .get("/", (req, res) => {
    res.send("Admin Homepage");
  })
  .patch("/", (req, res) => {
    res.send("Admin Homepage");
  })
  .delete("/", (req, res) => {
    res.send("Admin Homepage");
  })
  .post("/", (req, res) => {
    res.send("Admin Homepage");
  })
  .toString();

export default router;
