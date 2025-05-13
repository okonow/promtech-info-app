import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Здесь будет запрос к API
    // Временно используем моковые данные
    const mockUser = {
      id: 1,
      name: 'Иван Иванов',
      position: 'Руководитель отдела',
      department: 'IT',
      company: 'OKB АКС',
      location: 'Москва',
      phone: '+7 (999) 123-45-67',
      email: 'ivanov@okb-aks.ru',
      nickname: 'ivanov_i'
    };

    setUser(mockUser);
    setLoading(false);
  }, []);

  if (loading) return <div className="loading">Загрузка профиля...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!user) return <div className="error">Профиль не найден</div>;

  return (
    <div className="profile-page">
      <h1>Профиль</h1>
      
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.position}</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-section">
            <h3>Основная информация</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>Должность:</label>
                <span>{user.position}</span>
              </div>
              <div className="detail-item">
                <label>Отдел:</label>
                <span>{user.department}</span>
              </div>
              <div className="detail-item">
                <label>Компания:</label>
                <span>{user.company}</span>
              </div>
              <div className="detail-item">
                <label>Локация:</label>
                <span>{user.location}</span>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h3>Контактная информация</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>Телефон:</label>
                <span>{user.phone}</span>
              </div>
              <div className="detail-item">
                <label>Email:</label>
                <span>{user.email}</span>
              </div>
              <div className="detail-item">
                <label>Никнейм:</label>
                <span>{user.nickname}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 