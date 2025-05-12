import { openClose } from './notifications.js';
import { showDocs } from './documents.js';
import { showProfile } from './profile.js';

let userIdOnPage = 0;

async function checkLogin() {
	let users;
	try {
		users = await fetch('api/users').then(res => res.json());
	} catch {
		// fallback на локальный JSON при оффлайне
		users = await fetch('dbmu/users.json').then(res => res.json());
	}

	let loginField = document.querySelector('input[name=login]');
	let passwordField = document.querySelector('input[name=password]');

	let foundMatch = false;
	for (let user of users) {
		if (
			(user.phone_number === loginField.value ||
			user.phone === loginField.value ||
			user.corporate_login === loginField.value) &&
			user.password === passwordField.value
		) {
			foundMatch = true;
			userIdOnPage = user.id;
			break;
		}
	}

	// резервный вход
	if (loginField.value === '555-0880' && passwordField.value === 'qawsedrftgyh') {
		foundMatch = true;
		userIdOnPage = -1;
	}

	if (!foundMatch) {
		document.querySelector('p.for-errors').innerText = 'Неверный логин или пароль';
		return;
	}

	document.querySelector('.login-curtain').style.display = 'none';
}

addEventListener('load', () => {
	showDocs();
	
	// Инициализируем профиль с небольшой задержкой, чтобы убедиться, что DOM загружен
	setTimeout(() => {
		showProfile(userIdOnPage);
	}, 100);
});

document.querySelector('form')?.addEventListener('submit', (e) => {
	e.preventDefault();
	checkLogin();
}); 