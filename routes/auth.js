const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// Регистрация пользователя
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Проверка уникальности email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send('Email уже используется');
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание нового пользователя
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.send('Регистрация прошла успешно');
});

// Вход пользователя
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(400).send('Неверный email или пароль');
    }

    // Сохранение данных пользователя в сессии
    req.session.userId = user._id;
    res.send('Вход выполнен успешно');
});

// Проверка авторизации
function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.status(401).send('Требуется авторизация');
}

module.exports = router;
