import express from "express";
const app = express();
const jsonParser = express.json();
app.use(jsonParser);
const port = 3001;

const db = {
  courses: [
    { id: 0, title: "frontend" },
    { id: 1, title: "bakcend" },
  ],
};

app.get("/courses", (req, res) => {
  let results = db.courses;

  if (req.query.title) {
    results = db.courses.filter(
      (course) => course.title.indexOf(req.query.title as string) > -1
    );
  }

  res.json(results);
});

app.get("/courses/:id", (req, res) => {
  const foundedCourse = db.courses.find((item) => item.id === +req.params.id);

  if (!foundedCourse) {
    res.sendStatus(404);
    return;
  }

  res.json(foundedCourse);
});

app.post("/courses", (req, res) => {
  if (!req.body?.title) {
    res.sendStatus(400);
    return;
  }

  const newCourse = {
    id: Date.now(),
    title: req.body?.title,
  };

  db.courses.push(newCourse);

  res.json(newCourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
