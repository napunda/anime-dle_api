const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

const user = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;

// `mongodb://${user}:${password}@containers-us-west-132.railway.app:7238`

async function main() {
  await mongoose.connect(
    `mongodb+srv://${user}:${password}@cluster0.lc2chss.mongodb.net/?retryWrites=true&w=majority`
  );
}

main().catch((err) => {
  console.log(err);
});

module.exports = main;
