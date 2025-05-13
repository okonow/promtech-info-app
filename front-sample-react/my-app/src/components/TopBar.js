import React, { useState } from 'react';

const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    { id: 1, title: 'Новое сообщение', message: 'У вас есть новое сообщение', time: new Date(), read: false },
    { id: 2, title: 'Обновление', message: 'Система обновлена', time: new Date(Date.now() - 3600000), read: true }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Implement search functionality
    console.log('Searching for:', e.target.value);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const markAsRead = (id) => {
    // Implement mark as read functionality
    console.log('Marking notification as read:', id);
  };

  const formatTime = (time) => {
    return new Intl.RelativeTimeFormat('ru', { numeric: 'auto' }).format(
      Math.round((time.getTime() - Date.now()) / (1000 * 60)),
      'minute'
    );
  };

  return (
    <>
      <div className="topbar">
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Поиск..."
          />
          <button className="search-btn">🔍</button>
        </div>
        <div className="notifications">
          <button className="notif-btn" onClick={toggleNotifications}>🔔</button>
          {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
        </div>
      </div>

      {showNotifications && (
        <div className="notif-panel">
          <div className="notif-panel-header">
            <h3>Уведомления</h3>
            <button className="notif-close-btn" onClick={toggleNotifications}>✕</button>
          </div>
          <div className="notif-container">
            {notifications.map(notification => (
              <div
                key={notification.id}
                className={`notification-item ${!notification.read ? 'unread' : ''}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="notification-content">
                  <h4>{notification.title}</h4>
                  <p>{notification.message}</p>
                  <span className="notification-time">{formatTime(notification.time)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar; 