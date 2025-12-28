import express, { type Application } from "express";

const app: Application = express();

app.get("/", (req, res) => {
  console.log(req.method);
  res.json({ message: "Welcome to the Todo App API!" });
});

export default app;
