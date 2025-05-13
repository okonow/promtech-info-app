function createDesktopNewsItem(newsData) {
    return `
    <div class="news-item" id="n${newsData.id}">
        <div class="news-image" style="background-image: url('${newsData.image_url}'); background-size: cover; background-position: center;"></div>
        <div class="news-content">
            <div class="news-title">${newsData.title}</div>
            <div class="news-footer">
                <a href="#" class="news-link">Читать далее</a>
                <span>${newsData.created_at}</span>
            </div>
        </div>
    </div>
    `;
}

export async function loadDesktopNews() {
    let news = await fetch('dbmu/news.json').then(res => res.json());
    let newsContainer = document.querySelector('.news-container');
    
    // Очищаем контейнер перед добавлением новостей
    if (newsContainer) {
        newsContainer.innerHTML = '';
        
        for (let newsData of news) {
            newsContainer.insertAdjacentHTML('beforeend', createDesktopNewsItem(newsData));
        }
    }
}

// Initialize news when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadDesktopNews();
}); 