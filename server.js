const http = require("http");
const fs = require("fs");

const delay = (ms) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, ms);
  });
};

const readFile = (path) => {
  return new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  });
};

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/":
      try {
        const result = await readFile("./pages/about.html");
        res.write(result);
      } catch (error) {
        res.statusCode = 500;
        res.write("500 Internal server error");
      } finally {
        res.end();
      }
      break;

    case "/delay":
      await delay(3000);
      res.write("delay");
      res.end();
      break;

    default:
      res.statusCode = 404;
      res.write("404 not found");
      res.end();
      break;
  }
});

server.listen(3003);
