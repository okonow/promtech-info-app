export async function showProfile(id) {
    let users = await fetch('dbmu/users.json').then(res => res.json());
    let u;
    for (let user of users) {
        if (user.id == id) {
            u = user;
            break;
        }
    }

    document.getElementById('full-name').innerText = `${u.middle_name} ${u.first_name} ${u.last_name}`;
    document.getElementById('phone-number').innerText = `${u.phone_number}`;
    document.getElementById('email').innerText = `${u.email}`;
    document.getElementById('position').innerText = `${u.position_id}`;
    document.getElementById('department').innerText = `${u.department_id}`;
    document.getElementById('company').innerText = `${u.company_id}`;
    document.getElementById('location').innerText = `${u.location}`;
    document.getElementById('nickname').innerText = `${u.nickname}`;
    
    // Set the profile photos
    const avatarElement = document.querySelector('.avatar');
    if (avatarElement) {
        avatarElement.style.backgroundImage = "url('assets/man1.png')";
    }
    
    const profilePhotoElement = document.getElementById('profile-photo');
    if (profilePhotoElement) {
        profilePhotoElement.style.backgroundImage = "url('assets/man1.png')";
    }
}
