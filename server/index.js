require("dotenv").config();
const express = require("express");
const sequelize = require("./db.js");
const models = require("./models/models.js");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/rout.js");
const errorHeandler = require("./middleware/ErrorHaendlingMiddleware.js");
const path = require("path");

const PORT = process.env.PORT || 5002;

const app = express();

// Разрешаем доступ с фронтенда
app.use(
    cors({
        origin: "http://localhost:3000", // Разрешить доступ с вашего фронтенда
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true, // Разрешаем отправку куки
    })
);

// Обработка OPTIONS-запросов для CORS (для preflight-запросов)
app.options("*", cors());

// Подключаем middleware для обработки JSON и статики
app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));
app.use(fileUpload({}));

// Подключаем маршруты
app.use("/api", router);

// Обработка ошибок
app.use(errorHeandler);

// Запуск сервера и подключение к базе данных
const start = async() => {
    try {
        await sequelize.authenticate();
        console.log("База данных подключена...");
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`));
    } catch (e) {
        console.error("Невозможно подключиться к базе данных:", e);
    }
};

start();