const express = require('express');
const router = express.Router();

// Массив для хранения статей (имитируем базу данных)
let articles = [];

// Обработчик для создания статьи (POST)
router.post('/articles', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Название и содержание обязательны' });
    }
    const newArticle = { id: articles.length + 1, title, content };
    articles.push(newArticle);
    res.status(201).json({ message: 'Статья успешно создана', article: newArticle });
});

// Обработчик для получения всех статей (GET)
router.get('/articles', (req, res) => {
    res.status(200).json(articles);
});

module.exports = router;
