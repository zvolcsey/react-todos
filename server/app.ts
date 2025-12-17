import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.method);
  res.json({ message: "Welcome to the Todo App API!" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
