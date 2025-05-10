function createNewsPost(newsData) {
	return `
<div class=news id=n${newsData.id}>
	<div class=title>
		<p>${newsData.title}</p>
		<div class=subs>
			<a>Читать далее</a>
			<p>${newsData.created_at}</p>
		</div>
	</div>
	<div class=image></div>
</div>
	`;
}
export async function showNews() {
	let news = await fetch('dbmu/news.json').then(res => res.json());
	let newsCont = document.querySelector('div.news-container');
	for (let newsData of news) newsCont.insertAdjacentHTML('beforeend', createNewsPost(newsData));
}