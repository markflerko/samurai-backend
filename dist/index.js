"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const jsonParser = express_1.default.json();
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
        results = db.courses.filter((course) => course.title.indexOf(req.query.title) > -1);
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
    var _a, _b;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.title)) {
        res.sendStatus(400);
        return;
    }
    const newCourse = {
        id: Date.now(),
        title: (_b = req.body) === null || _b === void 0 ? void 0 : _b.title,
    };
    db.courses.push(newCourse);
    res.json(newCourse);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
