import express from "express";
import UserController from "./controllers/UserController";

const app = express();

app.get("/", (req, res) => res.send("Redis ISI-TICs"));

app.get("/users", UserController.find);

app.listen(3000);