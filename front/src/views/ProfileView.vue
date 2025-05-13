<template>
  <div class="profile-view">
    <div class="profile-info">
      <div class="profile-photo-container">
        <div class="profile-photo" ref="profilePhoto"></div>
      </div>
      
      <div class="profile-entry">
        <div class="profile-icon" style="background-image: url('@/assets/profile_icons/ico_1.png')"></div>
        <div class="profile-label">ФИО</div>
        <div class="profile-value">{{ user?.name || '-' }}</div>
      </div>
      
      <div class="profile-entry">
        <div class="profile-icon" style="background-image: url('@/assets/profile_icons/ico_2.png')"></div>
        <div class="profile-label">Служебный телефон</div>
        <div class="profile-value">{{ user?.phone || '-' }}</div>
      </div>
      
      <div class="profile-entry">
        <div class="profile-icon" style="background-image: url('@/assets/profile_icons/ico_3.png')"></div>
        <div class="profile-label">Почта</div>
        <div class="profile-value">{{ user?.email || '-' }}</div>
      </div>
      
      <div class="profile-entry">
        <div class="profile-icon" style="background-image: url('@/assets/profile_icons/ico_4.png')"></div>
        <div class="profile-label">Должность</div>
        <div class="profile-value">{{ user?.position || '-' }}</div>
      </div>
      
      <div class="profile-entry">
        <div class="profile-icon" style="background-image: url('@/assets/profile_icons/ico_5.png')"></div>
        <div class="profile-label">Отдел</div>
        <div class="profile-value">{{ user?.department || '-' }}</div>
      </div>
      
      <div class="profile-entry">
        <div class="profile-icon" style="background-image: url('@/assets/profile_icons/ico_6.png')"></div>
        <div class="profile-label">Организация</div>
        <div class="profile-value">{{ user?.company || '-' }}</div>
      </div>
      
      <div class="profile-entry">
        <div class="profile-icon" style="background-image: url('@/assets/profile_icons/ico_7.png')"></div>
        <div class="profile-label">Размещение</div>
        <div class="profile-value">{{ user?.location || '-' }}</div>
      </div>
      
      <div class="profile-entry">
        <div class="profile-icon" style="background-image: url('@/assets/profile_icons/ico_8.png')"></div>
        <div class="profile-label">Псевдоним</div>
        <div class="profile-value">{{ user?.nickname || '-' }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const user = ref(userStore.user)

onMounted(async () => {
  // In a real application, you might want to fetch the user's profile data here
  // await userStore.fetchUserProfile()
})
</script>

<style scoped>
.profile-view {
  padding: 20px;
}

.profile-info {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.profile-photo-container {
  text-align: center;
  margin-bottom: 30px;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin: 0 auto;
}

.profile-entry {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}

.profile-entry:last-child {
  border-bottom: none;
}

.profile-icon {
  width: 32px;
  height: 32px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
}

.profile-label {
  width: 200px;
  color: #666;
}

.profile-value {
  flex: 1;
  font-weight: 500;
}
</style> 