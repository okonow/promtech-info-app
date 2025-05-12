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
    
    document.getElementById('detail-name-pk').textContent = contact.name;
    document.getElementById('detail-phone-pk').textContent = contact.phone;
    document.getElementById('detail-email-pk').textContent = contact.email;
    document.getElementById('detail-position-pk').textContent = contact.position;
    document.getElementById('detail-department-pk').textContent = contact.department;
    document.getElementById('detail-company-pk').textContent = contact.company;
    document.getElementById('detail-location-pk').textContent = contact.location;
    document.getElementById('detail-nickname-pk').textContent = contact.nickname;
    
    document.querySelector('.contact-detail-panel').style.display = 'block';
}

function hideContactDetail() {
    document.querySelector('.contact-detail-panel').style.display = 'none';
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
    const contactList = document.querySelector('#dir .contact-list');
    contactList.innerHTML = '';
    
    contacts.forEach(contact => {
        contactList.insertAdjacentHTML('beforeend', createContactItem(contact));
    });
    
    document.querySelectorAll('#dir .contact-item').forEach(item => {
        item.addEventListener('click', () => {
            const contactId = parseInt(item.dataset.id);
            showContactDetail(contactId);
            
            document.querySelectorAll('#dir .contact-item').forEach(c => {
                c.classList.remove('selected');
            });
            item.classList.add('selected');
        });
    });
}

function initDirectory() {
    renderContactList(contactsData);
    
    const searchInput = document.querySelector('#dir .dir-search input');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        const filteredContacts = filterContacts(query);
        renderContactList(filteredContacts);
    });
    
    const backButton = document.querySelector('#dir .back-button');
    backButton.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            hideContactDetail();
        }
    });
    
    if (window.innerWidth > 768 && contactsData.length > 0) {
        showContactDetail(contactsData[0].id);
        const firstContactItem = document.querySelector('#dir .contact-item');
        if (firstContactItem) {
            firstContactItem.classList.add('selected');
        }
    }
    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            hideContactDetail();
        } else if (contactsData.length > 0) {
            const selectedItem = document.querySelector('#dir .contact-item.selected');
            if (!selectedItem && document.querySelector('#dir .contact-item')) {
                const firstId = parseInt(document.querySelector('#dir .contact-item').dataset.id);
                showContactDetail(firstId);
                document.querySelector('#dir .contact-item').classList.add('selected');
            } else if (selectedItem) {
                showContactDetail(parseInt(selectedItem.dataset.id));
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initDirectory();
});

export { filterContacts, renderContactList, showContactDetail, hideContactDetail }; 