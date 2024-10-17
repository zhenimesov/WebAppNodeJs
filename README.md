# Проект "Управление Статьями"

## Описание

Этот проект представляет собой приложение для управления статьями, где пользователи могут регистрироваться, входить в систему, создавать и просматривать статьи. Мы реализовали функциональность хеширования паролей, управления сессиями, защиту маршрутов и стилизацию интерфейса.

## Отчет

### Описание шагов

1. **Настройка модели пользователя**:
   - Реализована модель пользователя для хранения данных о пользователях.
   - Добавлено хеширование паролей с использованием библиотеки **bcrypt**.

2. **Добавление сессий**:
   - Реализовано управление сессиями для хранения данных о пользователе с помощью **express-session**.
   - Позволяет сохранять состояние пользователя между запросами.

3. **Ограничение доступа к защищенным маршрутам**:
   - Реализованы проверка аутентификации и авторизация для доступа к защищенным маршрутам.

4. **Реализация пагинации**:
   - Добавлена функциональность пагинации для управления большим количеством статей.

5. **Стилизация приложения**:
   - Использован **Bootstrap** для стилизации интерфейса приложения, что сделало его более современным и удобным для пользователя.






Ссылки на сторонние библиотеки
bcrypt: Библиотека для хеширования паролей. https://www.npmjs.com/package/bcrypt
express-session: Middleware для управления сессиями в приложениях Express. https://www.npmjs.com/package/express-session
Bootstrap: CSS-фреймворк для создания адаптивных и стильных интерфейсов. https://getbootstrap.com/
