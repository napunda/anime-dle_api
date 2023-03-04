const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

async function main() {
  await mongoose.connect(
    `mongodb+srv://${user}:${password}@cluster0.uutiwh5.mongodb.net/?retryWrites=true&w=majority`
  );
}

main().catch((err) => {
  console.log(err);
});

module.exports = main;
