function createNotif(notifData) {
	return `
<div class=notif id=d${notifData.id}>${notifData.title}</div>
	`;
}
export function openClose() {
	document.querySelector('.notif-wrapper').classList.toggle('open-close');
}