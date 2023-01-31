const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

const user = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;

async function main() {
  await mongoose.connect(
    `mongodb://${user}:${password}@containers-us-west-132.railway.app:7238`
  );
}

main().catch((err) => {
  console.log(err);
});

module.exports = main;
