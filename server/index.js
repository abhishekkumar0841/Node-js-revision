const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Home page");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("About page");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Contact page");
  } else if (req.url === "/product") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "GET",
    };

    const apiReq = http.request(options, (apiRes) => {
      apiRes.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(data.toString());
      });
    });

    apiReq.on("error", (err) => {
      console.log("Error :", err);
    });

    apiReq.end();
  } else {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "something went wrong!" }));
  }
});

const PORT = 3003;
server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
