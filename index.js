import express from "express";
import { router } from "./routes.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Express Application</h1>`);
});

app.use("/user", router);

app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});

// app.get("/user/login", userLogin);
// app.get("/user/signup", userSignup);

// app.get("/user/:username", userController);

// app.get("/search", userSearch);

// app.get("/about", (req, res) => {
//   res.send("This is a about page");
// });

// app.get("/contact", (req, res) => {
//   res.send("This is s contact page");
// });
