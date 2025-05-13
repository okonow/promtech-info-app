import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

const Docs = () => {
  const [documentSections, setDocumentSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Здесь будет запрос к API
    // Временно используем моковые данные
    const mockSections = [
      {
        id: 1,
        title: 'Общие документы',
        documents: [
          {
            id: 1,
            title: 'Правила внутреннего распорядка',
            type: 'pdf',
            size: '2.5 MB',
            date: new Date()
          },
          {
            id: 2,
            title: 'Положение о конфиденциальности',
            type: 'doc',
            size: '1.8 MB',
            date: new Date(Date.now() - 86400000)
          }
        ]
      },
      {
        id: 2,
        title: 'Техническая документация',
        documents: [
          {
            id: 3,
            title: 'Руководство пользователя',
            type: 'pdf',
            size: '4.2 MB',
            date: new Date(Date.now() - 172800000)
          }
        ]
      }
    ];

    setDocumentSections(mockSections);
    setLoading(false);
  }, []);

  const getDocumentIcon = (type) => {
    switch (type) {
      case 'pdf':
        return '📄';
      case 'doc':
        return '📝';
      default:
        return '📎';
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('ru-RU');
  };

  if (loading) return <div className="loading">Загрузка документов...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="docs-page">
      <h1>Документы</h1>
      
      <div className="docs-container">
        {documentSections.map(section => (
          <div key={section.id} className="docs-section">
            <h2>{section.title}</h2>
            <div className="docs-grid">
              {section.documents.map(doc => (
                <div key={doc.id} className="doc-card">
                  <div className="doc-icon">{getDocumentIcon(doc.type)}</div>
                  <div className="doc-info">
                    <h3>{doc.title}</h3>
                    <div className="doc-meta">
                      <span className="doc-type">{doc.type.toUpperCase()}</span>
                      <span className="doc-size">{doc.size}</span>
                      <span className="doc-date">{formatDate(doc.date)}</span>
                    </div>
                  </div>
                  <button className="doc-download">⬇️</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Docs;
