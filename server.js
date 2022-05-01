const http = require("http");

let requestsCount = 0;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/lol":
      res.write(`lol`);
      break;
    case "/":
    case "/kek":
      res.write(`kek`);
      break;
    case "/cheburek":
      res.write(`cheburek`);
      break;

    default:
      res.statusCode = 404;
      res.write("404 not found");
      break;
  }
  requestsCount++;
  res.write(`markus lucius castus, requestsCount: ${requestsCount}`);
  res.end();
});

server.listen(3003);
