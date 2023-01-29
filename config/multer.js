const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/images");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      uuidv4().replaceAll("-", "") + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

module.exports = upload;
