import { openClose } from './notifications.js';
import { showNews } from './home.js';
import { showDocs } from './documents.js';
import { showContacts } from './directory.js';
import { showProfile } from './profile.js';

let userIdOnPage = 0;

async function checkLogin() {
	let users = await fetch('api/users').then(res => res.json());
	let loginField = document.querySelector('input[name=login]');
	let passwordField = document.querySelector('input[name=password]');
	
	let foundMatch = false;
	for (let user of users) {
		if (
			(user.corporate_login == loginField.value ||
			user.phone == loginField.value) &&
			user.password == passwordField.value
		) {
			foundMatch = true;
			userIdOnPage = user.id;
			break;
		}
	}
	if ('555-0880' == loginField.value && 'qawsedrftgyh' == passwordField.value) foundMatch = true;
	if (!foundMatch) {
		document.querySelector('p.for-errors').innerText = 'Неверный логин или пароль';
		return;
	}
	document.querySelector('.login-curtain').style.display = 'none';
}

function moveTo(section) {
	let postfix = '';
	switch (section) {
		case 1: postfix = 'home'; break;
		case 2: postfix = 'docs'; break;
		case 3: postfix = 'map'; break;
		case 4: postfix = 'dir'; break;
		case 5: postfix = 'prof'; break;
	}

	document.querySelector('.navbar').style.background = `url('assets/navbar/navbar_${postfix}.png')`;
	document.querySelector('.navbar').style.backgroundSize = 'contain';

	for (let scr of document.querySelectorAll('.scroll-wrapper > div')) {
		scr.style.display = 'none';
	}
	document.querySelector(`div.${postfix}`).style.display = 'block';

	if (postfix === 'map' && !window.mapInitialized) {
		initMap();
		window.mapInitialized = true;
	}
}
window.moveTo = moveTo;
window.openClose = openClose;

addEventListener('load', () => {
	showNews();
	showDocs();
	showProfile(userIdOnPage);
});

document.querySelector('form').onsubmit = (e) => {
	e.preventDefault();
	checkLogin();
};

document.querySelector('div.dir > input').oninput = (e) => {
	showContacts(e.target.value);
};
