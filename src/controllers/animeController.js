const Anime = require("../models/Anime");
const fs = require("fs");

const animeController = {
  async create(req, res) {
    try {
      const { title, realease_date } = req.body;
      const img = req.file;

      const anime = new Anime({
        title,
        realease_date,
        img_path: img.path,
      });

      await anime.save();

      res.json({ message: "Anime salvo com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao salvar anime.", error });
    }
  },

  async getAll(req, res) {
    try {
      const totalItems = req.query.totalItems;
      const animes = await Anime.find();

      if (totalItems) res.json({ animes, totalItems: animes.length });
      else res.json(animes);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar animes!" });
    }
  },

  async getItem(req, res) {
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
  },

  async removeItem(req, res) {
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
  },

  async updateItem(req, res) {
    try {
      const id = req.params.id;
      const { title, realease_date } = req.body;
      const img = req.file;

      const anime = {
        title,
        realease_date,
        img_path: img.path,
        updated_at: Date.now(),
      };
      const update = await Anime.updateOne({ _id: id }, anime);
      if (update.matchedCount === 0) {
        res.json({ message: "Nenhuma campo editado." });
      }
      res.json({ message: "Anime editado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao editar anime.", error });
    }
  },
};

module.exports = animeController;
