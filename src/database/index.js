require("dotenv").config();
const mongoose = require("mongoose");

const userSeeder = require("./seeders/userSeeder");

async function runSeeders() {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("DB connected");

  await userSeeder();

  console.log("Tous les seeders ont été exécutés !");
  process.exit();
}

runSeeders();

// to run this file: node src/database/index.js