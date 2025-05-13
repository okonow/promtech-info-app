<template>
    <div id="map" class="content-section">
                <div class="map-layout">
                    <div id="office-map"></div>
                    <div class="map-controls">
                        <h3>Построить маршрут</h3>
                        <label>Откуда:</label>
                        <input id="start-point"
                            type="text"
                            placeholder="Старт (lat,lng)"
                            value="56.726805,37.146724"
                            style="width: 100%; font-size: 0.8em; padding: 0.4em; margin-bottom: 0.5em;" />
                        <label>Куда:</label>
                        <input id="end-point"
                            type="text"
                            placeholder="Финиш (lat,lng)"
                            value="56.753676,37.165452"
                            style="width: 100%; font-size: 0.8em; padding: 0.4em; margin-bottom: 0.5em;" />
                        <button onclick="buildRoute()">Построить маршрут</button>
                    </div>
                </div>
            </div>
</template>