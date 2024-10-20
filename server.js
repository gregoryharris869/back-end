const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.locals.errors = [];
  next();
});

app.get("/", (req, res) => {
  res.render("home-page");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/register", (req, res) => {
  const errors = [];
  if (typeof req.body.username !== "string") req.body.username = "";
  if (typeof req.body.password !== "string") req.body.password = "";
  req.body.username = req.body.username.trim();
  // Username validations
  if (!req.body.username) errors.push("Please enter a username.");
  if (req.body.username && req.body.username.length < 3)
    errors.push("Username must be at least 3 characters long.");
  if (req.body.username && req.body.username.length > 10)
    errors.push("Username cannot exceed 10 characters.");
  if (req.body.username && !req.body.username.match(/^[a-zA-Z0-9]+$/))
    errors.push("Username can only contain letters and numbers.");
  // Password validations
  if (!req.body.password) errors.push("Please enter a password.");
  if (req.body.password && req.body.password.length < 12)
    errors.push("Password must be at least 12 characters.");
  if (req.body.password && req.body.password.length > 70)
    errors.push("Password cannot exceed 70 characters.");
  // Render errors
  if (errors.length) {
    return res.render("home-page", { errors });
  }
  // Save the user to the database

  // Log the user in by giving them a cookie
});

app.listen(3000);
