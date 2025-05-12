import { contactsData } from './directoryData.js';

function createContactItem(contact) {
	return `
		<div class="contact-item" data-id="${contact.id}">
			<div class="contact-item-title">${contact.name}</div>
			<div class="contact-item-chevron"></div>
		</div>
	`;
}

function showContactDetail(contactId) {
	const contact = contactsData.find(c => c.id === contactId);
	if (!contact) return;
	
	document.getElementById('detail-name').textContent = contact.name;
	document.getElementById('detail-phone').textContent = contact.phone;
	document.getElementById('detail-email').textContent = contact.email;
	document.getElementById('detail-position').textContent = contact.position;
	document.getElementById('detail-department').textContent = contact.department;
	document.getElementById('detail-company').textContent = contact.company;
	document.getElementById('detail-location').textContent = contact.location;
	document.getElementById('detail-nickname').textContent = contact.nickname;
	
	document.querySelector('.contact-detail').style.display = 'flex';
}

function hideContactDetail() {
	document.querySelector('.contact-detail').style.display = 'none';
}

function filterContacts(query) {
	if (!query) {
		return contactsData;
	}
	
	query = query.toLowerCase();
	return contactsData.filter(contact => 
		contact.name.toLowerCase().includes(query) ||
		contact.position.toLowerCase().includes(query) ||
		contact.department.toLowerCase().includes(query) ||
		contact.phone.toLowerCase().includes(query) ||
		contact.email.toLowerCase().includes(query)
	);
}

function renderContactList(contacts) {
	const contactList = document.querySelector('.contact-list');
	contactList.innerHTML = '';
	
	contacts.forEach(contact => {
		contactList.insertAdjacentHTML('beforeend', createContactItem(contact));
	});
	
	document.querySelectorAll('.contact-item').forEach(item => {
		item.addEventListener('click', () => {
			const contactId = parseInt(item.dataset.id);
			showContactDetail(contactId);
		});
	});
}

export function initDirectory() {
	renderContactList(contactsData);
	
	const searchInput = document.querySelector('.dir-search input');
	searchInput.addEventListener('input', (e) => {
		const query = e.target.value.trim();
		const filteredContacts = filterContacts(query);
		renderContactList(filteredContacts);
	});
	
	const backButton = document.querySelector('.back-button');
	backButton.addEventListener('click', hideContactDetail);
}

document.addEventListener('DOMContentLoaded', () => {
	initDirectory();
});

export { filterContacts, renderContactList, showContactDetail, hideContactDetail };