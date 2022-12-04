const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect("https://bang-ridho-strawberry.up.railway.app/");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port 5000!");
});
