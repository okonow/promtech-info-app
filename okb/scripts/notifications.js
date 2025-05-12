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

function createNotif(notifData) {
	return `
<div class="notif" id="d${notifData.id}">
    <div class="notif-title">${notifData.title}</div>
    <div class="notif-time">${notifData.time}</div>
</div>
	`;
}

export function openClose() {
	document.querySelector('.notif-wrapper').classList.toggle('open-close');
}

function loadNotifications() {
    const container = document.querySelector('.notif-container');
    
    const header = container.querySelector('.notif-header');
    
    container.innerHTML = '';
    
    if (header) {
        container.appendChild(header);
    }
    
    sampleNotifications.forEach(notif => {
        container.innerHTML += createNotif(notif);
    });
    
    const badge = document.querySelector('.notif-badge');
    if (badge) {
        badge.textContent = sampleNotifications.length;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadNotifications();
<<<<<<< HEAD
});
=======
});
>>>>>>> 11f44dbfcd4cd7278a6652d366a3a4798e2cb7c9
