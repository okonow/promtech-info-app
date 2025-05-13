import React, { useState, useEffect } from 'react';

const ContactsDir = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Здесь будет запрос к API
    // Временно используем моковые данные
    const mockContacts = [
      {
        id: 1,
        name: 'Иван Иванов',
        position: 'Руководитель отдела',
        department: 'IT',
        phone: '+7 (999) 123-45-67',
        email: 'ivanov@okb-aks.ru'
      },
      {
        id: 2,
        name: 'Петр Петров',
        position: 'Ведущий разработчик',
        department: 'IT',
        phone: '+7 (999) 765-43-21',
        email: 'petrov@okb-aks.ru'
      }
    ];

    setContacts(mockContacts);
    setLoading(false);
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="contacts-page">
      <h1>Справочник сотрудников</h1>
      
      <div className="contacts-container">
        <div className="contacts-list">
          <div className="search-bar">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по имени, должности или отделу..."
            />
          </div>

          {loading ? (
            <div className="loading">Загрузка контактов...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="contacts-grid">
              {filteredContacts.map(contact => (
                <div
                  key={contact.id}
                  className={`contact-card ${selectedContact?.id === contact.id ? 'selected' : ''}`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <h3>{contact.name}</h3>
                  <p>{contact.position}</p>
                  <span className="department">{contact.department}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedContact && (
          <div className="contact-details">
            <h2>{selectedContact.name}</h2>
            <div className="details-grid">
              <div className="detail-item">
                <label>Должность:</label>
                <span>{selectedContact.position}</span>
              </div>
              <div className="detail-item">
                <label>Отдел:</label>
                <span>{selectedContact.department}</span>
              </div>
              <div className="detail-item">
                <label>Телефон:</label>
                <span>{selectedContact.phone}</span>
              </div>
              <div className="detail-item">
                <label>Email:</label>
                <span>{selectedContact.email}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsDir; 