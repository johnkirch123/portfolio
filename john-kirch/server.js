const express = require("express");
const mongoose = require("mongoose");

// 2. Creating routes via js files from routes/api
const users = require("./routes/api/users");
const blogs = require("./routes/api/blogs");
const projects = require("./routes/api/projects");

// 0. Instantiate express in the app variable.
const app = express();

// 1. DB Config (step 1 in setting up DB after requiring mongoose)
const db = require("./config/keys").mongoURI;

// 1. Connect to MongoDB (step 2 is connecting to mlab mongo server)
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// 0. Setting up a basic route for the home.
app.get("/", (req, res) => res.send("You have reached the homepage"));

// 2. Use Routes
app.use("/api/users", users);
app.use("/api/blogs", blogs);
app.use("/api/projects", projects);

// 0. const variable for the port.
const port = process.env.PORT || 4080;
// 0. listen on port.
app.listen(port, () => console.log(`Server running on port ${port}`));
