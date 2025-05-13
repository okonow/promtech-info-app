import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Здесь будет запрос к API
    // Временно используем моковые данные
    const mockNews = [
      {
        id: 1,
        title: 'Обновление системы',
        content: 'Система была обновлена до версии 2.0',
        date: new Date()
      },
      {
        id: 2,
        title: 'Новый функционал',
        content: 'Добавлены новые возможности для работы с документами',
        date: new Date(Date.now() - 86400000)
      }
    ];

    setNews(mockNews);
    setLoading(false);
  }, []);

  return (
    <div className="content-section active">
      <h1>Добро пожаловать в OKB АКС</h1>
      
      <section className="news-section">
        <h2>Последние новости</h2>
        {loading ? (
          <div className="loading">Загрузка новостей...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <div className="news-grid">
            {news.map(item => (
              <div key={item.id} className="news-card">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <span className="date">{new Date(item.date).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="services-section">
        <h2>Сервисы</h2>
        <div className="services-grid">
          <Link to="/map" className="service-card">
            <h3>Карта</h3>
            <p>Просмотр расположения объектов и построение маршрутов</p>
          </Link>
          <Link to="/contacts" className="service-card">
            <h3>Справочник</h3>
            <p>Поиск сотрудников и контактная информация</p>
          </Link>
          <Link to="/docs" className="service-card">
            <h3>Документы</h3>
            <p>Доступ к корпоративным документам</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 