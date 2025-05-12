function createContact(contactData) {
	return `
<div class=contact id=c${contactData.id}>${u.middle_name} ${u.first_name} ${u.last_name}</div>
	`;
}
export async function showContacts(searchQuery) {
	let oldContacts = document.querySelector('div.dir').querySelectorAll('div.contact');
	for (let old of oldContacts) old.parentNode.removeChild(old);
	
	let contacts = await fetch('api/users').then(res => res.json());
	let divDir = document.querySelector('div.dir');
	for (let contact of contacts) { 
		if (!searchQuery) {
			divDir.insertAdjacentHTML('beforeend', createContact(contact));
			continue;
		}
		if (contact.phone_number.includes(searchQuery)) {
			divDir.insertAdjacentHTML('beforeend', createContact(contact));
		}
	}
}
