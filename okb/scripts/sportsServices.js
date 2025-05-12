function toggleSportsServices() {
    const sportsPanel = document.querySelector('.sports-panel');
    sportsPanel.classList.toggle('active');
}

<<<<<<< HEAD

=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
function createSportsServicesPanel() {
    const sportsPanel = document.createElement('div');
    sportsPanel.className = 'sports-panel';
    
    sportsPanel.innerHTML = `
        <div class="sports-panel-header">
            <div class="drag-indicator"></div>
            <h2>Всем спорт и отдых</h2>
            <p>Спорт, интеллектуальный клуб "Экспромт", конкурсы</p>
            <button class="sports-close-btn" onclick="toggleSportsServices()"></button>
        </div>
        
        <div class="sports-panel-content">
            <div class="sports-section">
                <h3>Ответственное лицо:</h3>
                <div class="sports-contact">
                    <div class="sports-contact-info">
                        <div class="sports-contact-item">
                            <div class="sports-icon user-icon"></div>
                            <span>Смирнов Игорь Петрович</span>
                        </div>
                        <div class="sports-contact-item">
                            <div class="sports-icon briefcase-icon"></div>
                            <span>Руководитель спортивного отдела</span>
                        </div>
                        <div class="sports-contact-item">
                            <div class="sports-icon mail-icon"></div>
                            <span>sports@okb-acs.ru</span>
                        </div>
                    </div>
                    <div class="sports-contact-photo"></div>
                </div>
            </div>
            
            <div class="sports-section">
                <h3>Об отделе:</h3>
                <p>
                    Ждем вас на корпоративных тренировках по футболу, волейболу. Наши сотрудники не только тренируются, но и при
                    желании активно участвуют в городских спортивных соревнованиях в разных видах спорта. Если вы увлекаетесь
                    лыжными гонками, велоспортом, скалолазанием, теннисом, единоборствами, плаванием или любым другим видом
                    спорта – мы поможем сориентироваться в спортивных секциях города и найти среди коллег
                    спортсменов-единомышленников.
                </p>
            </div>
            
            <div class="sports-section">
                <h3>Спортивные мероприятия:</h3>
                <div class="sports-cards">
                    <div class="sports-card">
                        <div class="sports-card-title">Корпоративный футбол</div>
                        <div class="sports-card-info">i</div>
                    </div>
                    <div class="sports-card">
                        <div class="sports-card-title">Корпоративный волейбол</div>
                        <div class="sports-card-info">i</div>
                    </div>
                    <div class="sports-card">
                        <div class="sports-card-title">Спартакиада</div>
                        <div class="sports-card-info">i</div>
                    </div>
                    <div class="sports-card sportsman">
                        <div class="sportsman-badge">
                            <div class="sportsman-outer"></div>
                            <div class="sportsman-inner">
                                <div class="sportsman-star"></div>
                            </div>
                            <div class="sportsman-text">SPORTSMAN</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="sports-section">
                <h3>Обратная связь:</h3>
                <div class="sports-feedback">
                    <select class="sports-select">
                        <option value="" disabled selected>Выбор направления</option>
                        <option value="football">Футбол</option>
                        <option value="volleyball">Волейбол</option>
                        <option value="spartakiada">Спартакиада</option>
                    </select>
                    
                    <textarea class="sports-textarea" placeholder="Текст вопроса, проблемы..."></textarea>
                    
                    <button class="sports-submit-btn">Задать вопрос</button>
                </div>
            </div>
        </div>
    `;
    
<<<<<<< HEAD
    
=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    const appContainer = document.querySelector('.app');
    if (appContainer) {
        appContainer.appendChild(sportsPanel);
    } else {
        document.body.appendChild(sportsPanel);
    }
    
<<<<<<< HEAD
    
=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    let startY = 0;
    sportsPanel.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    }, false);
    
    sportsPanel.addEventListener('touchmove', function(e) {
        let moveY = e.touches[0].clientY;
        let diff = moveY - startY;
        
<<<<<<< HEAD
        
        if (diff > 0) {
            
=======
        if (diff > 0) {
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
            let translateY = Math.min(diff, 100);
            sportsPanel.style.transform = `translateY(${translateY}px)`;
            e.preventDefault();
        }
    }, false);
    
    sportsPanel.addEventListener('touchend', function(e) {
<<<<<<< HEAD
        
        if (parseInt(sportsPanel.style.transform.replace('translateY(', '')) > 80) {
            toggleSportsServices();
        }
        
=======
        if (parseInt(sportsPanel.style.transform.replace('translateY(', '')) > 80) {
            toggleSportsServices();
        }
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
        sportsPanel.style.transform = '';
    }, false);
}

<<<<<<< HEAD

document.addEventListener('DOMContentLoaded', () => {
    
    createSportsServicesPanel();
    
    
=======
document.addEventListener('DOMContentLoaded', () => {
    createSportsServicesPanel();
    
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    const sportsCard = document.querySelector('.card:nth-child(6)');
    if (sportsCard) {
        sportsCard.addEventListener('click', toggleSportsServices);
    }
});

<<<<<<< HEAD

window.toggleSportsServices = toggleSportsServices; 
=======
window.toggleSportsServices = toggleSportsServices; 
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
