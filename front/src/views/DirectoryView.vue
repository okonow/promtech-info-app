<template>
  <div class="directory-view">
    <div class="directory-layout">
      <div class="directory-list">
        <div class="dir-search">
          <div class="search-icon"></div>
          <input 
            v-model="searchQuery"
            type="text"
            placeholder="Поиск по справочнику"
            @input="handleSearch"
          >
        </div>
        
        <div class="contact-list">
          <div v-for="contact in filteredContacts"
               :key="contact.id"
               class="contact-item"
               @click="showContactDetails(contact)"
          >
            <div class="contact-avatar"></div>
            <div class="contact-info">
              <div class="contact-name">{{ contact.name }}</div>
              <div class="contact-position">{{ contact.position }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="selectedContact" class="contact-detail-panel">
        <div class="contact-detail-header">
          <button class="back-button" @click="selectedContact = null"></button>
          <h2>Контакт</h2>
        </div>
        <div class="contact-detail-content">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-icon user-icon"></div>
              <span>{{ selectedContact.name }}</span>
            </div>
            <div class="contact-info-item">
              <div class="contact-icon phone-icon"></div>
              <span>{{ selectedContact.phone }}</span>
            </div>
            <div class="contact-info-item">
              <div class="contact-icon mail-icon"></div>
              <span>{{ selectedContact.email }}</span>
            </div>
            <div class="contact-info-item">
              <div class="contact-icon briefcase-icon"></div>
              <span>{{ selectedContact.position }}</span>
            </div>
            <div class="contact-info-item">
              <div class="contact-icon folder-icon"></div>
              <span>{{ selectedContact.department }}</span>
            </div>
            <div class="contact-info-item">
              <div class="contact-icon globe-icon"></div>
              <span>{{ selectedContact.company }}</span>
            </div>
            <div class="contact-info-item">
              <div class="contact-icon pin-icon"></div>
              <span>{{ selectedContact.location }}</span>
            </div>
            <div class="contact-info-item">
              <div class="contact-icon message-icon"></div>
              <span>{{ selectedContact.nickname }}</span>
            </div>
          </div>
          <div class="contact-photo"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Contact {
  id: string
  name: string
  position: string
  department: string
  company: string
  email: string
  phone: string
  location: string
  nickname: string
}

const searchQuery = ref('')
const selectedContact = ref<Contact | null>(null)

// Mock data
const contacts = ref<Contact[]>([
  {
    id: '1',
    name: 'Иван Иванов',
    position: 'Инженер-конструктор',
    department: 'Отдел разработки',
    company: 'ОКБ АКС',
    email: 'ivan.ivanov@okb.ru',
    phone: '+7 (999) 123-45-67',
    location: 'Корпус А, 3 этаж',
    nickname: '@ivanov'
  },
  {
    id: '2',
    name: 'Петр Петров',
    position: 'Ведущий инженер',
    department: 'Отдел разработки',
    company: 'ОКБ АКС',
    email: 'petr.petrov@okb.ru',
    phone: '+7 (999) 234-56-78',
    location: 'Корпус Б, 2 этаж',
    nickname: '@petrov'
  },
  {
    id: '3',
    name: 'Анна Сидорова',
    position: 'HR-менеджер',
    department: 'Отдел персонала',
    company: 'ОКБ АКС',
    email: 'anna.sidorova@okb.ru',
    phone: '+7 (999) 345-67-89',
    location: 'Корпус В, 1 этаж',
    nickname: '@sidorova'
  }
])

const filteredContacts = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return contacts.value.filter(contact => 
    contact.name.toLowerCase().includes(query) ||
    contact.position.toLowerCase().includes(query) ||
    contact.department.toLowerCase().includes(query)
  )
})

const handleSearch = () => {
  // Additional search logic if needed
}

const showContactDetails = (contact: Contact) => {
  selectedContact.value = contact
}
</script>

<style scoped>
.directory-view {
  height: 100%;
  padding: 20px;
}

.directory-layout {
  display: flex;
  gap: 20px;
  height: calc(100vh - 140px);
}

.directory-list {
  flex: 1;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.dir-search {
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.dir-search input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
}

.contact-list {
  flex: 1;
  overflow-y: auto;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
}

.contact-item:hover {
  background-color: #f5f5f5;
}

.contact-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin-right: 15px;
}

.contact-info {
  flex: 1;
}

.contact-name {
  font-weight: 500;
  margin-bottom: 4px;
}

.contact-position {
  color: #666;
  font-size: 0.9em;
}

.contact-detail-panel {
  width: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.contact-detail-header {
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  gap: 15px;
}

.back-button {
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
}

.contact-detail-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.contact-info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
}

.contact-icon {
  width: 24px;
  height: 24px;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.contact-photo {
  width: 200px;
  height: 200px;
  background-color: #e0e0e0;
  border-radius: 8px;
  margin: 20px auto;
}
</style> 