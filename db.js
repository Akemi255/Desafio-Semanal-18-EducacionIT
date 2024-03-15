const { MongoClient } = require("mongodb");
require("dotenv").config();

const url = process.env.DB_URL;
const dbName = "tasks";
let dbInstance = "tasks";

async function connectToDatabase() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    dbInstance = client.db(dbName);
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

function getDatabase() {
  if (!dbInstance) {
    throw new Error("Database not initialized. Call connectToDatabase first.");
  }
  return dbInstance;
}

module.exports = { connectToDatabase, getDatabase };
