<template>
  <div class="map-view">
    <div class="map-layout">
      <div id="office-map" ref="mapContainer"></div>
      <div class="map-controls">
        <h3>Построить маршрут</h3>
        <label>Откуда:</label>
        <input 
          v-model="startPoint"
          type="text"
          placeholder="Старт (lat,lng)"
          @change="updateRoute"
        />
        <label>Куда:</label>
        <input 
          v-model="endPoint"
          type="text"
          placeholder="Финиш (lat,lng)"
          @change="updateRoute"
        />
        <button class="btn btn-primary" @click="buildRoute">
          Построить маршрут
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

const mapContainer = ref<HTMLElement | null>(null)
const map = ref<L.Map | null>(null)
const routingControl = ref<L.Routing.Control | null>(null)

const startPoint = ref('56.726805,37.146724')
const endPoint = ref('56.753676,37.165452')

onMounted(() => {
  if (mapContainer.value) {
    // Initialize map
    map.value = L.map(mapContainer.value).setView([56.740240, 37.156088], 13)

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map.value)

    // Initialize routing control
    routingControl.value = L.Routing.control({
      waypoints: [
        L.latLng(...startPoint.value.split(',').map(Number)),
        L.latLng(...endPoint.value.split(',').map(Number))
      ],
      routeWhileDragging: true,
      language: 'ru'
    }).addTo(map.value)
  }
})

onUnmounted(() => {
  if (map.value) {
    map.value.remove()
  }
})

const updateRoute = () => {
  if (routingControl.value) {
    try {
      const start = startPoint.value.split(',').map(Number)
      const end = endPoint.value.split(',').map(Number)
      
      routingControl.value.setWaypoints([
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1])
      ])
    } catch (error) {
      console.error('Invalid coordinates:', error)
    }
  }
}

const buildRoute = () => {
  updateRoute()
}
</script>

<style scoped>
.map-view {
  height: 100%;
  padding: 20px;
}

.map-layout {
  display: flex;
  gap: 20px;
  height: calc(100vh - 140px);
}

#office-map {
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
}

.map-controls {
  width: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.map-controls h3 {
  margin-bottom: 20px;
}

.map-controls label {
  display: block;
  margin-bottom: 5px;
  color: #666;
}

.map-controls input {
  width: 100%;
  margin-bottom: 15px;
}

.map-controls button {
  width: 100%;
  margin-top: 10px;
}
</style> 