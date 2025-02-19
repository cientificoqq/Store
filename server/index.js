require("dotenv").config();
const express = require("express");
const sequelize = require("./db.js");
const models = require("./models/models.js");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/rout.js");
const PORT = process.env.PORT || 5002;
const errorHeandler = require("./middleware/ErrorHaendlingMiddleware.js");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.relative(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
app.use(errorHeandler);

const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Сервет работает на ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();