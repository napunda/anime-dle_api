const Anime = require("../models/Anime");
const fs = require("fs");

exports.create = async (req, res) => {
  try {
    const { title, realease_date } = req.body;
    const img = req.file;

    const anime = new Anime({
      title,
      realease_date,
      img_path: img.path,
    });

    await anime.save();

    res.json({ anime, message: "Anime salvo com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar anime.", error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const totalItems = req.query.totalItems;
    const animes = await Anime.find();

    if (totalItems) res.json({ animes, totalItems: animes.length });
    else res.json(animes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar animes!" });
  }
};

exports.getItem = async (req, res) => {
  try {
    const id = req.params.id;
    const anime = await Anime.findById(id);
    if (!anime) {
      res.status(404).json({ message: "Anime não econtrado" });
    }

    res.json(anime);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar anime!" });
  }
};
exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const anime = await Anime.findById(id);
    if (!anime) {
      res.status(404).json({ message: "Anime não econtrado!" });
    }
    fs.unlinkSync(anime.img_path);
    await anime.remove();

    res.json({ message: "Anime removido com sucesso!" });
    anime.delete();
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar anime!" });
  }
};
