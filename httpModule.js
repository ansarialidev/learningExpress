import express from "express";

const app = express();
const PORT = 3000;
//!http Module in express js

app.use(express.json());

//?performing get request
app.get("/", (req, res) => {
  res.send("Welcome back user");
});

//? performing post request
app.post("/user", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `user ${name} with email ${email} created successfully`,
  });
});

//? performing put method
app.put("/user/:id", (req, res) => {
  const userID = req.params.id;
  const { name, email } = req.body;
  res.json({
    message: `User ${userID} updated on ${name} ${email}`,
  });
});

//? performimg delete method
app.delete("/user/:id", (req, res) => {
  const userID = req.params.id;
  res.json({
    message: `user with ID ${userID} deleted successfullt`,
  });
});

//? performing get method
app.get("/profile/:name/:id([0-9]{5})", (req, res) => {
  const { name, id } = req.params;
  res.json({
    id,
    name,
  });
});

//? handling wrong url
app.get("*", (req, res) => {
  res.send(`Invalid URL`);
});

app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});
