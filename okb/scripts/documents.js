function createDoc(documentData) {
	return `
<div class=doc id=d${documentData.id}>${documentData.title}</div>
	`;
}
export async function showDocs() {
	let docs = await fetch('dbmu/documents.json').then(res => res.json());
	let divSecs = document.querySelectorAll('div.docs div.sec');
	for (let doc of docs) { 
		switch (doc.category) {
			case 'Категория1':
				divSecs[0].insertAdjacentHTML('beforeend', createDoc(doc));
				break;
			case 'Категория2':
				divSecs[1].insertAdjacentHTML('beforeend', createDoc(doc));
				break;
		}
	}
}
