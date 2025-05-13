<style src="./styles.css">
</style>
<template>
    <div class="sidebar">
    <nav class="main-nav">
                <button class="nav-btn active" onclick="showSection('home')">
                    <span class="icon home"></span>
                    <span class="label">Главная</span>
                </button>
                <button class="nav-btn" onclick="showSection('docs')">
                    <span class="icon docs"></span>
                    <span class="label">Документы</span>
                </button>
                <button class="nav-btn" onclick="showSection('map')">
                    <span class="icon map"></span>
                    <span class="label">Карта</span>
                </button>
                <button class="nav-btn" onclick="showSection('dir')">
                    <span class="icon dir"></span>
                    <span class="label">Справочник</span>
                </button>
                <button class="nav-btn" onclick="showSection('prof')">
                    <span class="icon prof"></span>
                    <span class="label">Профиль</span>
                </button>
            </nav>
    </div>
</template>