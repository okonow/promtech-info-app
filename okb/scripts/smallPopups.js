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
<<<<<<< HEAD
        description: 'Корпоративные программы обучения, тренинги, курсы повышения квалификации, профессиональное развитие'
    },
    safety: {
        title: 'Охрана труда',
        description: 'Техника безопасности, инструктажи, нормативы, сертификации, специальная оценка условий труда'
    }
};


function showCardPopup(type) {
    
=======
        description: 'Корпоративные тренинги, программы развития компетенций, онлайн-курсы и библиотеки, наставничество'
    },
    safety: {
        title: 'Охрана труда',
        description: 'Техника безопасности, регламенты и инструкции, экологическая безопасность, пожарная безопасность'
    }
};

function showCardPopup(type) {
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    const existingPopup = document.querySelector('.card-popup');
    if (existingPopup) {
        existingPopup.remove();
    }
    
<<<<<<< HEAD
    
    const popup = document.createElement('div');
    popup.className = 'card-popup';
    
    
    const content = popupContents[type];
    
    
=======
    const popup = document.createElement('div');
    popup.className = 'card-popup';
    
    const content = popupContents[type];
    
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    popup.innerHTML = `
        <div class="popup-content">
            <h3>${content.title}</h3>
            <p>${content.description}</p>
            <button class="popup-close-btn"></button>
        </div>
    `;
    
<<<<<<< HEAD
    
    document.querySelector('.app').appendChild(popup);
    
    
=======
    document.querySelector('.app').appendChild(popup);
    
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
    
<<<<<<< HEAD
    
=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    popup.querySelector('.popup-close-btn').addEventListener('click', () => {
        hideCardPopup();
    });
    
<<<<<<< HEAD
    
=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            hideCardPopup();
        }
    });
}

<<<<<<< HEAD

=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
function hideCardPopup() {
    const popup = document.querySelector('.card-popup');
    if (popup) {
        popup.classList.remove('active');
<<<<<<< HEAD
        
=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
        setTimeout(() => {
            popup.remove();
        }, 300);
    }
}

<<<<<<< HEAD

document.addEventListener('DOMContentLoaded', () => {
=======
document.addEventListener('DOMContentLoaded', () => {
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
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    
    const itCard = document.querySelector('.card:nth-child(4)');
    if (itCard) {
        itCard.addEventListener('click', () => {
            showCardPopup('it');
        });
    }
    
<<<<<<< HEAD
    
=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    const socialCard = document.querySelector('.card:nth-child(5)');
    if (socialCard) {
        socialCard.addEventListener('click', () => {
            showCardPopup('social');
        });
    }
<<<<<<< HEAD
    
    
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
=======
});

window.showCardPopup = showCardPopup;
window.hideCardPopup = hideCardPopup; 
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
