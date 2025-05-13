# OKB АКС - Информационное приложение

## Описание
Информационное приложение для сотрудников ОКБ АКС, включающее в себя:
- Новости и объявления
- Карту с расположением объектов
- Справочник сотрудников
- Документы
- Профиль пользователя

## Требования
- Node.js версии 18 или выше
- npm (устанавливается вместе с Node.js)

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Создайте файл `.env` в корневой папке проекта:
```bash
VITE_APP_TITLE=OKB АКС
VITE_API_URL=http://localhost:3000
```

3. Запустите приложение в режиме разработки:
```bash
npm run dev
```

Приложение будет доступно по адресу: http://localhost:3001

## Сборка для продакшена

Для создания продакшен-версии выполните:
```bash
npm run build
```

Собранные файлы будут находиться в папке `dist/`

## Структура проекта
```
front/
├── src/              # Исходный код приложения
│   ├── assets/       # Статические ресурсы
│   ├── components/   # Vue компоненты
│   ├── router/       # Маршрутизация
│   ├── stores/       # Хранилища Pinia
│   ├── services/     # API сервисы
│   └── views/        # Компоненты страниц
├── index.html        # Главный HTML файл
├── vite.config.js    # Конфигурация Vite
└── package.json      # Зависимости и скрипты
```

## Доступные команды
- `npm run dev` - запуск сервера разработки
- `npm run build` - сборка для продакшена
- `npm run preview` - предпросмотр собранного приложения
- `npm run lint` - проверка кода линтером
- `npm run format` - форматирование кода

## Технологии
- Vue.js 3
- Vue Router
- Pinia
- Vite
- Axios
- Leaflet (для карт)

## Примечания
- Приложение работает на порту 3001
- API сервер должен быть запущен на порту 3000
- Для работы с API требуется авторизация

## Features

- User authentication
- Employee directory
- Document management
- Office map with routing
- News and announcements
- Profile management
- Notifications system

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `