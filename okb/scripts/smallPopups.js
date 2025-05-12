const popupContents = {
    it: {
        title: 'ИТ',
        description: 'Инструкции, информационная безопасность, сервисы, helpdesk'
    },
    social: {
        title: 'Социальные программы',
        description: 'ДМС, питание, жилищные программы, детям сотрудников'
    },
    training: {
        title: 'Обучение и развитие',
        description: 'Корпоративные программы обучения, тренинги, курсы повышения квалификации, профессиональное развитие'
    },
    safety: {
        title: 'Охрана труда',
        description: 'Техника безопасности, инструктажи, нормативы, сертификации, специальная оценка условий труда'
    }
};


function showCardPopup(type) {
    
    const existingPopup = document.querySelector('.card-popup');
    if (existingPopup) {
        existingPopup.remove();
    }
    
    
    const popup = document.createElement('div');
    popup.className = 'card-popup';
    
    
    const content = popupContents[type];
    
    
    popup.innerHTML = `
        <div class="popup-content">
            <h3>${content.title}</h3>
            <p>${content.description}</p>
            <button class="popup-close-btn"></button>
        </div>
    `;
    
    
    document.querySelector('.app').appendChild(popup);
    
    
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
    
    
    popup.querySelector('.popup-close-btn').addEventListener('click', () => {
        hideCardPopup();
    });
    
    
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            hideCardPopup();
        }
    });
}


function hideCardPopup() {
    const popup = document.querySelector('.card-popup');
    if (popup) {
        popup.classList.remove('active');
        
        setTimeout(() => {
            popup.remove();
        }, 300);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    const itCard = document.querySelector('.card:nth-child(4)');
    if (itCard) {
        itCard.addEventListener('click', () => {
            showCardPopup('it');
        });
    }
    
    
    const socialCard = document.querySelector('.card:nth-child(5)');
    if (socialCard) {
        socialCard.addEventListener('click', () => {
            showCardPopup('social');
        });
    }
    
    
    const trainingCard = document.querySelector('.card:nth-child(2)');
    if (trainingCard) {
        trainingCard.addEventListener('click', () => {
            showCardPopup('training');
        });
    }
    
    
    const safetyCard = document.querySelector('.card:nth-child(3)');
    if (safetyCard) {
        safetyCard.addEventListener('click', () => {
            showCardPopup('safety');
        });
    }
});


window.showCardPopup = showCardPopup;
window.hideCardPopup = hideCardPopup; 
