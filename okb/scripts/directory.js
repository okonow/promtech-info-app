function createContact(contactData) {
	return `
<div class=contact id=c${contactData.id}>${contactData.phone_number}</div>
	`;
}
export async function showContacts(searchQuery) {
	let oldContacts = document.querySelector('div.dir').querySelectorAll('div.contact');
	for (let old of oldContacts) old.parentNode.removeChild(old);
	
	let contacts = await fetch('dbmu/contacts.json').then(res => res.json());
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