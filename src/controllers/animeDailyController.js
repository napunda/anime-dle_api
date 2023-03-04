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
    // res.json({ message: "Anime diário salvo com sucesso!" });
    res.json({ anime });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar anime.", error });
  }
};

exports.get = async (req, res) => {
  try {
    const animes = await DailyAnime.find();

    if (!animes.length) {
      await this.setItem();
    } else {
    }

    res.json(animes[0]);
  } catch (error) {
    res.json("error");
  }
};

// const get = async (req, res) => {
//   try {
//     const animes = await DailyAnime.find();

//     if (!animes.length) {
//       setItem();
//       const animes = await DailyAnime.find();
//       res.json(animes[0]);
//     }
//     // if (!animes.length) {
//     //   console.log("Aqui");
//     // } else {
//     //   const date = new Date(animes.at(0).created_at);
//     //   const dateNow = new Date(Date.now());

//     //   function formatDate(date) {
//     //     const year = date.getFullYear();
//     //     const day = date.getDate();
//     //     const month = date.getMonth() + 1;

//     //     return `${day <= 9 ? `0` + day : day}/${
//     //       month <= 9 ? `0` + month : month
//     //     }/${year}`;
//     //   }
//     //   if (formatDate(dateNow) === formatDate(date)) {
//     //     res.json(animes[0]);
//     //   } else {
//     //     // this.setItem();
//     //     // const animes = await DailyAnime.find();
//     //     res.json("Anime de hoje não setado");
//     //   }
//     // }
//   } catch (error) {
//     res.status(500).json({ message: "Erro ao buscar anime.", error });
//   }
// };

// module.exports = { get, setItem };
