const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "src/assets/uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});

const upload = multer({ storage });

const frontEndURL = "http://localhost:8080";

app.use(cors());

app.get("/", function(req, res) {
  res.send(`<a href="${frontEndURL}">node server is up / view front-end @ => ${frontEndURL}</a>`);
});

app.post("/upload", upload.array("uploader"), function(req, res, next) {
  console.log("upload request (files)", req.files);
  res.send("walou")
});

console.log("@node-server > " + Date.now());

app.listen(3030);