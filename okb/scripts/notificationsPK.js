/**
 * Notification functionality for PC version
 */

// Sample notification data
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

/**
 * Toggle notification panel visibility
 */
function toggleNotifications() {
    const notifPanel = document.querySelector('.notif-panel');
    notifPanel.classList.toggle('active');
}

/**
 * Create notification HTML
 * @param {Object} notif - Notification data object
 * @returns {String} HTML string for notification
 */
function createNotification(notif) {
    return `
        <div class="notif-item" data-id="${notif.id}">
            <div class="notif-title">${notif.title}</div>
            <div class="notif-time">${notif.time}</div>
        </div>
    `;
}

/**
 * Load notifications into the panel
 */
function loadNotifications() {
    const container = document.querySelector('.notif-container');
    
    // Clear existing notifications
    container.innerHTML = '';
    
    // Add notifications
    sampleNotifications.forEach(notif => {
        container.innerHTML += createNotification(notif);
    });
    
    // Update badge count
    updateNotificationBadge();
}

/**
 * Update notification badge count
 */
function updateNotificationBadge() {
    const badge = document.querySelector('.notif-badge');
    badge.textContent = sampleNotifications.length;
    
    // Hide badge if no notifications
    if (sampleNotifications.length === 0) {
        badge.style.display = 'none';
    } else {
        badge.style.display = 'flex';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadNotifications();
    
    // Set up event listeners
    const notifBtn = document.querySelector('.notif-btn');
    const closeBtn = document.querySelector('.notif-close-btn');
    
    if (notifBtn) {
        notifBtn.addEventListener('click', toggleNotifications);
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', toggleNotifications);
    }
});

// Export functions to window object for inline event handlers if needed
window.toggleNotifications = toggleNotifications; 