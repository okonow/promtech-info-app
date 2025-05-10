export async function showProfile(id) {
	let users = await fetch('dbmu/users.json').then(res => res.json());
	let u;
	for (let user of users) {
		if (user.id == id) {
			u = user;
			break;
		}
	}
	let profEntries = document.querySelectorAll('div.prof p');
	profEntries[0].innerText = `${u.middle_name} ${u.first_name} ${u.last_name}`;
	profEntries[1].innerText = `${u.phone_number}`;
	profEntries[2].innerText = `${u.email}`;
	profEntries[3].innerText = `${u.position_id}`;
	profEntries[4].innerText = `${u.department_id}`;
	profEntries[5].innerText = `${u.company_id}`;
	//prof-entry[6].innerText = `${}`;
	//prof-entry[7].innerText = `${}`;
}