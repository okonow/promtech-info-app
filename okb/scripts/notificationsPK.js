const sampleNotifications = [
    {
        id: 1,
        title: "Новое сообщение от HR",
        time: "Сегодня, 10:30"
    },
    {
        id: 2,
        title: "Напоминание о совещании",
        time: "Сегодня, 09:15"
    },
    {
        id: 3,
        title: "Обновление системы",
        time: "Вчера, 16:45"
    }
];

function toggleNotifications() {
    const notifPanel = document.querySelector('.notif-panel');
    notifPanel.classList.toggle('active');
}

/**
 * @param {Object} notif
 * @returns {String}
 */
function createNotification(notif) {
    return `
        <div class="notif-item" data-id="${notif.id}">
            <div class="notif-title">${notif.title}</div>
            <div class="notif-time">${notif.time}</div>
        </div>
    `;
}

function loadNotifications() {
    const container = document.querySelector('.notif-container');
    
    container.innerHTML = '';
    
    sampleNotifications.forEach(notif => {
        container.innerHTML += createNotification(notif);
    });
    
    updateNotificationBadge();
}

function updateNotificationBadge() {
    const badge = document.querySelector('.notif-badge');
    badge.textContent = sampleNotifications.length;
    
    if (sampleNotifications.length === 0) {
        badge.style.display = 'none';
    } else {
        badge.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadNotifications();
    
    const notifBtn = document.querySelector('.notif-btn');
    const closeBtn = document.querySelector('.notif-close-btn');
    
    if (notifBtn) {
        notifBtn.addEventListener('click', toggleNotifications);
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', toggleNotifications);
    }
});

window.toggleNotifications = toggleNotifications; 