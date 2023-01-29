const express = require("express");
const router = express.Router();
const upload = require("../../config/multer");

const AnimeController = require("../controllers/animeController");

router.post("/animes", upload.single("img"), AnimeController.create);
router.get("/animes", AnimeController.getAll);
router.get("/animes/:id", AnimeController.getItem);
router.patch("/animes/:id", upload.single("img"), AnimeController.updateItem);
router.delete("/animes/:id", AnimeController.removeItem);

module.exports = router;
