const express = require("express");
const router = express.Router();

const filesRouter = require("./files");
const animeRouter = require("./anime");
const animeDailyRouter = require("./animeDaily");

router.use("/", filesRouter);
router.use("/api", animeRouter);
router.use("/api", animeDailyRouter);

module.exports = router;
