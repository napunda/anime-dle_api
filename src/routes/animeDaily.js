const express = require("express");
const router = express.Router();

const animeDailyController = require("../controllers/animeDailyController");

router.get("/anime-daily", animeDailyController.get);

module.exports = router;
