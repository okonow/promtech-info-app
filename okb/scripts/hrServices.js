function toggleHrServices() {
    const hrPanel = document.querySelector('.hr-panel');
    hrPanel.classList.toggle('active');
}

function createHrServicesPanel() {
    const hrPanel = document.createElement('div');
    hrPanel.className = 'hr-panel';
    
    hrPanel.innerHTML = `
        <div class="hr-panel-header">
            <div class="drag-indicator"></div>
            <h2>HR-сервисы</h2>
            <p>Шаблоны документов, заказать справку</p>
            <button class="hr-close-btn" onclick="toggleHrServices()"></button>
        </div>
        
        <div class="hr-panel-content">
            <div class="hr-section">
                <h3>Ответственное лицо:</h3>
                <div class="hr-contact">
                    <div class="hr-contact-info">
                        <div class="hr-contact-item">
                            <div class="hr-icon user-icon"></div>
                            <span>Иванова Анна Сергеевна</span>
                        </div>
                        <div class="hr-contact-item">
                            <div class="hr-icon briefcase-icon"></div>
                            <span>Руководитель HR-отдела</span>
                        </div>
                        <div class="hr-contact-item">
                            <div class="hr-icon mail-icon"></div>
                            <span>hr@okb-acs.ru</span>
                        </div>
                    </div>
                    <div class="hr-contact-photo"></div>
                </div>
            </div>
            
            <div class="hr-section">
                <h3>Об отделе:</h3>
                <p>
                    HR-отдел ОКБ АКС занимается кадровыми вопросами, включая подбор персонала, 
                    адаптацию новых сотрудников, организацию обучения и развития, кадровое 
                    делопроизводство и разработку корпоративной культуры компании.
                </p>
            </div>
            
            <div class="hr-section">
                <h3>Обратная связь:</h3>
                <div class="hr-feedback">
                    <select class="hr-select">
                        <option value="" disabled selected>Выбор подразделения</option>
                        <option value="hr">HR отдел</option>
                        <option value="it">ИТ отдел</option>
                        <option value="finance">Финансовый отдел</option>
                    </select>
                    
                    <textarea class="hr-textarea" placeholder="Текст вопроса, проблемы..."></textarea>
                    
                    <button class="hr-submit-btn">Задать вопрос</button>
                </div>
            </div>
        </div>
    `;
    
    const appContainer = document.querySelector('.app');
    if (appContainer) {
        appContainer.appendChild(hrPanel);
    } else {
        document.body.appendChild(hrPanel);
    }
    
    let startY = 0;
    hrPanel.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    }, false);
    
    hrPanel.addEventListener('touchmove', function(e) {
        let moveY = e.touches[0].clientY;
        let diff = moveY - startY;
        
        if (diff > 0) {
            let translateY = Math.min(diff, 100);
            hrPanel.style.transform = `translateY(${translateY}px)`;
            e.preventDefault();
        }
    }, false);
    
    hrPanel.addEventListener('touchend', function(e) {
        if (parseInt(hrPanel.style.transform.replace('translateY(', '')) > 80) {
            toggleHrServices();
        }
        hrPanel.style.transform = '';
    }, false);
}

document.addEventListener('DOMContentLoaded', () => {
    createHrServicesPanel();
    
    const hrCard = document.querySelector('.card:nth-child(1)');
    if (hrCard) {
        hrCard.addEventListener('click', toggleHrServices);
    }
});

window.toggleHrServices = toggleHrServices; 