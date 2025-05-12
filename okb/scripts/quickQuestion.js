function toggleQuickQuestion() {
    const quickPanel = document.querySelector('.quick-panel');
    quickPanel.classList.toggle('active');
}

<<<<<<< HEAD

=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
function createQuickQuestionPanel() {
    const quickPanel = document.createElement('div');
    quickPanel.className = 'quick-panel';
    
    quickPanel.innerHTML = `
        <div class="quick-panel-header">
            <div class="drag-indicator"></div>
            <h2>Руководство по добавлению фото</h2>
            <button class="quick-close-btn" onclick="toggleQuickQuestion()"></button>
        </div>
        
        <div class="quick-panel-content">
            <div class="quick-section">
                <h3>Как добавить фото профиля</h3>
                
                <div class="guide-steps">
                    <div class="guide-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Перейдите в раздел «Профиль»</h4>
                            <p>Нажмите на иконку профиля в нижней панели навигации</p>
                        </div>
                        <div class="step-icon user-icon"></div>
                    </div>
                    
                    <div class="guide-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Нажмите на область фото</h4>
                            <p>Коснитесь области, где должно быть ваше фото</p>
                        </div>
                        <div class="step-icon camera-icon"></div>
                    </div>
                    
                    <div class="guide-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>Выберите источник фото</h4>
                            <p>Выберите «Галерея» для загрузки существующего фото или «Камера» для создания нового снимка</p>
                        </div>
                        <div class="step-icon image-icon"></div>
                    </div>
                    
                    <div class="guide-step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h4>Выберите или сделайте фото</h4>
                            <p>Выберите фото из галереи или сделайте новый снимок</p>
                        </div>
                        <div class="step-icon upload-icon"></div>
                    </div>
                    
                    <div class="guide-step">
                        <div class="step-number">5</div>
                        <div class="step-content">
                            <h4>Подтвердите выбор</h4>
                            <p>Нажмите «Сохранить» или «Использовать фото»</p>
                        </div>
                        <div class="step-icon check-icon"></div>
                    </div>
                </div>
            </div>
            
            <div class="quick-section requirements">
                <div class="requirements-header">
                    <div class="alert-icon"></div>
                    <h3>Требования к фото</h3>
                </div>
                <ul class="requirements-list">
                    <li>Фото должно быть четким и хорошо освещенным</li>
                    <li>Лицо должно быть хорошо видно</li>
                    <li>Рекомендуемый формат: JPG или PNG</li>
                    <li>Максимальный размер файла: 5 МБ</li>
                    <li>Минимальное разрешение: 400x400 пикселей</li>
                </ul>
            </div>
            
            <div class="quick-section support">
                <h3>Возникли проблемы?</h3>
                <p>Если у вас возникли трудности с загрузкой фото, обратитесь в службу поддержки:</p>
                <div class="support-contact">
                    <div class="mail-icon"></div>
                    <span>support@promteh.ru</span>
                </div>
                <div class="support-contact">
                    <div class="phone-icon"></div>
                    <span>+7 (XXX) XXX-XX-XX</span>
                </div>
            </div>
        </div>
    `;
    
<<<<<<< HEAD
    
=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    const appContainer = document.querySelector('.app');
    if (appContainer) {
        appContainer.appendChild(quickPanel);
    } else {
        document.body.appendChild(quickPanel);
    }
    
<<<<<<< HEAD
    
=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    let startY = 0;
    quickPanel.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    }, false);
    
    quickPanel.addEventListener('touchmove', function(e) {
        let moveY = e.touches[0].clientY;
        let diff = moveY - startY;
        
<<<<<<< HEAD
        
        if (diff > 0) {
            
=======
        if (diff > 0) {
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
            let translateY = Math.min(diff, 100);
            quickPanel.style.transform = `translateY(${translateY}px)`;
            e.preventDefault();
        }
    }, false);
    
    quickPanel.addEventListener('touchend', function(e) {
<<<<<<< HEAD
        
        if (parseInt(quickPanel.style.transform.replace('translateY(', '')) > 80) {
            toggleQuickQuestion();
        }
        
=======
        if (parseInt(quickPanel.style.transform.replace('translateY(', '')) > 80) {
            toggleQuickQuestion();
        }
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
        quickPanel.style.transform = '';
    }, false);
}

<<<<<<< HEAD

document.addEventListener('DOMContentLoaded', () => {
    
    createQuickQuestionPanel();
    
    
=======
document.addEventListener('DOMContentLoaded', () => {
    createQuickQuestionPanel();
    
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    const quickBtn = document.querySelector('button.muted');
    if (quickBtn) {
        quickBtn.addEventListener('click', toggleQuickQuestion);
    }
});

<<<<<<< HEAD

=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
window.toggleQuickQuestion = toggleQuickQuestion;
