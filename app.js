// Fullstack JavaScript Midterm Sprint
// By: Brian Jackman
// 2024/11/03

const express = require("express");
const app = express();
const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
