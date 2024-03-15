const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/taskRoutes");
const { connectToDatabase } = require("./db");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Conectar a la base de datos al iniciar la aplicación
connectToDatabase()
  .then(() => {
    console.log("Connected to database");

    app.get("/", (req, res) => {
      res.render("index");
    });

    app.use("/", routes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
    process.exit(1);
  });
