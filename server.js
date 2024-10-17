const express = require('express');
const app = express();
const articlesRouter = require('./routes/articles');

// Middleware для обработки JSON данных
app.use(express.json());

// Подключение маршрутов
app.use('/api', articlesRouter);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
