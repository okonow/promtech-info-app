<template>
  <div class="documents-view">
    <div v-for="section in documentSections" 
         :key="section.id" 
         class="doc-section"
    >
      <h3 class="doc-section-title">{{ section.title }}</h3>
      <div class="doc-list">
        <div v-for="doc in section.documents"
             :key="doc.id"
             class="doc-item"
             @click="openDocument(doc)"
        >
          <div class="doc-icon" :class="getDocumentIcon(doc.type)"></div>
          <div class="doc-info">
            <div class="doc-name">{{ doc.name }}</div>
            <div class="doc-meta">
              <span class="doc-date">{{ formatDate(doc.date) }}</span>
              <span class="doc-size">{{ formatSize(doc.size) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Document {
  id: string
  name: string
  type: string
  date: Date
  size: number
  url: string
}

interface DocumentSection {
  id: string
  title: string
  documents: Document[]
}

// Mock data
const documentSections = ref<DocumentSection[]>([
  {
    id: '1',
    title: 'Общие документы',
    documents: [
      {
        id: '1',
        name: 'Правила внутреннего распорядка',
        type: 'pdf',
        date: new Date('2024-03-01'),
        size: 1024 * 1024 * 2.5, // 2.5 MB
        url: '/documents/rules.pdf'
      },
      {
        id: '2',
        name: 'Положение о конфиденциальности',
        type: 'doc',
        date: new Date('2024-02-15'),
        size: 1024 * 512, // 512 KB
        url: '/documents/privacy.doc'
      }
    ]
  },
  {
    id: '2',
    title: 'Техническая документация',
    documents: [
      {
        id: '3',
        name: 'Руководство пользователя',
        type: 'pdf',
        date: new Date('2024-03-10'),
        size: 1024 * 1024 * 5, // 5 MB
        url: '/documents/manual.pdf'
      },
      {
        id: '4',
        name: 'Технические спецификации',
        type: 'xls',
        date: new Date('2024-02-28'),
        size: 1024 * 1024 * 1.2, // 1.2 MB
        url: '/documents/specs.xls'
      }
    ]
  }
])

const getDocumentIcon = (type: string) => {
  const icons: Record<string, string> = {
    pdf: 'pdf-icon',
    doc: 'doc-icon',
    xls: 'xls-icon',
    txt: 'txt-icon'
  }
  return icons[type] || 'file-icon'
}

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

const formatSize = (bytes: number) => {
  const units = ['B', 'KB', 'MB', 'GB']
  let size = bytes
  let unitIndex = 0

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }

  return `${size.toFixed(1)} ${units[unitIndex]}`
}

const openDocument = (doc: Document) => {
  // In a real application, you would handle document opening here
  console.log('Opening document:', doc.url)
  window.open(doc.url, '_blank')
}
</script>

<style scoped>
.documents-view {
  padding: 20px;
}

.doc-section {
  margin-bottom: 30px;
}

.doc-section-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.doc-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}

.doc-item {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
}

.doc-item:hover {
  transform: translateY(-2px);
}

.doc-icon {
  width: 40px;
  height: 40px;
  margin-right: 15px;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.doc-info {
  flex: 1;
}

.doc-name {
  font-weight: 500;
  margin-bottom: 4px;
}

.doc-meta {
  display: flex;
  gap: 15px;
  color: #666;
  font-size: 0.9em;
}

.pdf-icon {
  background-color: #ff4444;
}

.doc-icon {
  background-color: #2196f3;
}

.xls-icon {
  background-color: #4caf50;
}

.txt-icon {
  background-color: #9e9e9e;
}
</style> 