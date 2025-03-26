import express from "express";

//* -------Learning Middleware-----------

const app = express();
const PORT = 3000;

app.use("/welcome", (req, res, next) => {
  console.log(`start middleware`);

  res.on("finish", () => {
    console.log(`finish middleware`);
  });
  next();
});

app.get("/welcome", (req, res) => {
  console.log("route");
  res.send("welcome back express page");
});

// app.use((req, res, next) => {
//   console.log(`Middleware executed successfully`);
//   next();
// });
app.get("/", (req, res) => {
  res.send(`Hello Express`);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
