<script setup>
import { onMounted } from 'vue'
import { useNewsStore } from '../stores/news'

const newsStore = useNewsStore()

onMounted(async () => {
  await newsStore.fetchNews()
})
</script>

<template>
  <div class="home">
    <h1>Добро пожаловать в OKB АКС</h1>
    
    <section class="news-section">
      <h2>Последние новости</h2>
      <div v-if="newsStore.loading" class="loading">
        Загрузка новостей...
      </div>
      <div v-else-if="newsStore.error" class="error">
        {{ newsStore.error }}
      </div>
      <div v-else class="news-grid">
        <div v-for="item in newsStore.news" :key="item.id" class="news-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
          <span class="date">{{ new Date(item.date).toLocaleDateString() }}</span>
        </div>
      </div>
    </section>

    <section class="services-section">
      <h2>Сервисы</h2>
      <div class="services-grid">
        <router-link to="/map" class="service-card">
          <h3>Карта</h3>
          <p>Просмотр расположения объектов и построение маршрутов</p>
        </router-link>
        <router-link to="/directory" class="service-card">
          <h3>Справочник</h3>
          <p>Поиск сотрудников и контактная информация</p>
        </router-link>
        <router-link to="/documents" class="service-card">
          <h3>Документы</h3>
          <p>Доступ к корпоративным документам</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  margin-bottom: 30px;
  color: #333;
}

section {
  margin-bottom: 40px;
}

h2 {
  margin-bottom: 20px;
  color: #444;
}

.loading, .error {
  text-align: center;
  padding: 20px;
  color: #666;
}

.error {
  color: #ff4444;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.news-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.news-card h3 {
  margin-bottom: 10px;
  color: #333;
}

.news-card p {
  color: #666;
  margin-bottom: 15px;
}

.date {
  color: #999;
  font-size: 0.9em;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.service-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card h3 {
  margin-bottom: 10px;
  color: #333;
}

.service-card p {
  color: #666;
}
</style>
