const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnimesSchema = new Schema({
  title: { type: String, required: true },
  realease_date: { type: Number, required: true },
  img_path: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

module.exports = mongoose.model("Anime", AnimesSchema);
