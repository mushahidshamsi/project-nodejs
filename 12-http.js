const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my HomePage!");
  } else if (req.url === "/about") {
    res.end("Here is my about info");
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p>I can't seem to find the page you are looking for</p>
  <a href="/">Back Home</a>`);
  }
});

server.listen(5000);
