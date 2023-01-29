const DailyAnime = require("../models/DailyAnime");
const Anime = require("../models/Anime");

exports.setItem = async (req, res) => {
  try {
    const animes = await Anime.find();

    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    };

    const { title, realease_date, img_path } =
      animes[getRandomInt(animes.length)];

    const anime = new DailyAnime({
      title,
      realease_date,
      img_path,
      created_at: Date.now(),
    });

    await anime.save();
    res.json({ message: "Anime diário salvo com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar anime.", error });
  }
};

exports.get = async (req, res) => {
  try {
    const animes = await DailyAnime.find();

    if (!animes.length) {
      this.setItem();
    } else {
    }

    res.json(animes[0]);
  } catch (error) {}
};
