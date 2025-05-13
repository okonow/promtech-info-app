<template>
     <div id="dir" class="content-section">
                <div class="directory-layout">
                    <div class="directory-list">
                        <div class="dir-search">
                            <div class="search-icon"></div>
                            <input type="text" placeholder="Поиск по справочнику">
                        </div>
                        
                        <div class="contact-list">
                            <!-- Contacts will be dynamically added here -->
                        </div>
                    </div>
                    
                    <div class="contact-detail-panel" style="display: none;">
                        <div class="contact-detail-header">
                            <button class="back-button"></button>
                            <h2>Контакт</h2>
                        </div>
                        <div class="contact-detail-content">
                            <div class="contact-info">
                                <div class="contact-info-item">
                                    <div class="contact-icon user-icon"></div>
                                    <span id="detail-name-pk">Фамилия Имя Отчество</span>
                                </div>
                                <div class="contact-info-item">
                                    <div class="contact-icon phone-icon"></div>
                                    <span id="detail-phone-pk">Служебный телефон</span>
                                </div>
                                <div class="contact-info-item">
                                    <div class="contact-icon mail-icon"></div>
                                    <span id="detail-email-pk">Почта</span>
                                </div>
                                <div class="contact-info-item">
                                    <div class="contact-icon briefcase-icon"></div>
                                    <span id="detail-position-pk">Должность</span>
                                </div>
                                <div class="contact-info-item">
                                    <div class="contact-icon folder-icon"></div>
                                    <span id="detail-department-pk">Отдел</span>
                                </div>
                                <div class="contact-info-item">
                                    <div class="contact-icon globe-icon"></div>
                                    <span id="detail-company-pk">Организация</span>
                                </div>
                                <div class="contact-info-item">
                                    <div class="contact-icon pin-icon"></div>
                                    <span id="detail-location-pk">Размещение</span>
                                </div>
                                <div class="contact-info-item">
                                    <div class="contact-icon message-icon"></div>
                                    <span id="detail-nickname-pk">Псевдоним</span>
                                </div>
                            </div>
                            <div class="contact-photo-pk"></div>
                        </div>
                    </div>
                </div>
            </div>
</template>