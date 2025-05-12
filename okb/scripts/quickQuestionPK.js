function toggleQuickQuestionPK() {
    const quickPanel = document.querySelector('.quick-panel-pk');
    quickPanel.classList.toggle('active');
    
<<<<<<< HEAD
    
=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    const backdrop = document.querySelector('.quick-panel-backdrop');
    if (backdrop) {
        backdrop.classList.toggle('active');
    } else {
        createBackdrop();
    }
}

<<<<<<< HEAD

=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
function createBackdrop() {
    const backdrop = document.createElement('div');
    backdrop.className = 'quick-panel-backdrop active';
    backdrop.addEventListener('click', function(e) {
        if (e.target === backdrop) {
            toggleQuickQuestionPK();
        }
    });
    document.body.appendChild(backdrop);
}

<<<<<<< HEAD

=======
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
function createQuickQuestionPanelPK() {
    const quickPanel = document.createElement('div');
    quickPanel.className = 'quick-panel-pk';
    
    quickPanel.innerHTML = `
        <div class="quick-panel-header-pk">
            <h2>Руководство по добавлению фото</h2>
            <button class="quick-close-btn-pk" onclick="toggleQuickQuestionPK()"></button>
        </div>
        
        <div class="quick-panel-content-pk">
            <div class="quick-section-pk">
                <h3>Как добавить фото профиля</h3>
                
                <div class="guide-steps-pk">
                    <div class="guide-step-pk">
                        <div class="step-number-pk">1</div>
                        <div class="step-content-pk">
                            <h4>Перейдите в раздел «Профиль»</h4>
                            <p>Нажмите на вкладку профиля в боковой панели навигации</p>
                        </div>
                        <div class="step-icon-pk user-icon"></div>
                    </div>
                    
                    <div class="guide-step-pk">
                        <div class="step-number-pk">2</div>
                        <div class="step-content-pk">
                            <h4>Нажмите на область фото</h4>
                            <p>Коснитесь области, где должно быть ваше фото</p>
                        </div>
                        <div class="step-icon-pk camera-icon"></div>
                    </div>
                    
                    <div class="guide-step-pk">
                        <div class="step-number-pk">3</div>
                        <div class="step-content-pk">
                            <h4>Выберите источник фото</h4>
                            <p>Выберите «Галерея» для загрузки существующего фото или «Камера» для создания нового снимка</p>
                        </div>
                        <div class="step-icon-pk image-icon"></div>
                    </div>
                    
                    <div class="guide-step-pk">
                        <div class="step-number-pk">4</div>
                        <div class="step-content-pk">
                            <h4>Выберите или сделайте фото</h4>
                            <p>Выберите фото из галереи или сделайте новый снимок</p>
                        </div>
                        <div class="step-icon-pk upload-icon"></div>
                    </div>
                    
                    <div class="guide-step-pk">
                        <div class="step-number-pk">5</div>
                        <div class="step-content-pk">
                            <h4>Подтвердите выбор</h4>
                            <p>Нажмите «Сохранить» или «Использовать фото»</p>
                        </div>
                        <div class="step-icon-pk check-icon"></div>
                    </div>
                </div>
            </div>
            
            <div class="quick-section-pk requirements-pk">
                <div class="requirements-header-pk">
                    <div class="alert-icon"></div>
                    <h3>Требования к фото</h3>
                </div>
                <ul class="requirements-list-pk">
                    <li>Фото должно быть четким и хорошо освещенным</li>
                    <li>Лицо должно быть хорошо видно</li>
                    <li>Рекомендуемый формат: JPG или PNG</li>
                    <li>Максимальный размер файла: 5 МБ</li>
                    <li>Минимальное разрешение: 400x400 пикселей</li>
                </ul>
            </div>
            
            <div class="quick-section-pk support-pk">
                <h3>Возникли проблемы?</h3>
                <p>Если у вас возникли трудности с загрузкой фото, обратитесь в службу поддержки:</p>
                <div class="support-contact-pk">
                    <div class="mail-icon"></div>
                    <span>support@promteh.ru</span>
                </div>
                <div class="support-contact-pk">
                    <div class="phone-icon"></div>
                    <span>+7 (XXX) XXX-XX-XX</span>
                </div>
            </div>
        </div>
    `;
    
<<<<<<< HEAD
    
    document.body.appendChild(quickPanel);
}


document.addEventListener('DOMContentLoaded', () => {
    
    createQuickQuestionPanelPK();
    
    
=======
    document.body.appendChild(quickPanel);
}

document.addEventListener('DOMContentLoaded', () => {
    createQuickQuestionPanelPK();
    
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
    const quickBtn = document.querySelector('.btn.btn-muted');
    if (quickBtn) {
        quickBtn.addEventListener('click', toggleQuickQuestionPK);
    }
});

<<<<<<< HEAD

window.toggleQuickQuestionPK = toggleQuickQuestionPK; 
=======
window.toggleQuickQuestionPK = toggleQuickQuestionPK; 
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
