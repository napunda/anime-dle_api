const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

// `mongodb://${user}:${password}@containers-us-west-132.railway.app:7238`

async function main() {
  await mongoose.connect(
<<<<<<< HEAD
    `mongodb+srv://${user}:${password}@cluster0.uutiwh5.mongodb.net/?retryWrites=true&w=majority`
=======
    `mongodb+srv://${user}:${password}@cluster0.lc2chss.mongodb.net/?retryWrites=true&w=majority`
>>>>>>> c42d3ca9f4729e2f9c017d22e5fe9f1fb139b1a9
  );
}

main().catch((err) => {
  console.log(err);
});

module.exports = main;
