const express = require("express");
const router = express.Router();
const path = require("path");

router.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "..", "uploads", "images"))
);

module.exports = router;
