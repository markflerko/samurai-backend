import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/samurais", (req, res) => {
  res.send("Hello Samurais!!!");
});

app.post("/samurais", (req, res) => {
  res.send("We have created samurais!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
