console.log('users')

// fetch api-------------

function loadData() {
    const url = 'https://gorest.co.in/public/v1/users'
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))
}
loadData();
function displayData(users) {

    const userContainer = document.getElementById('users');
    for (const user of users) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h3>Name: ${user.name}</h3>
    <p>Email: ${user.email}</p>
    <p>Gender: ${user.gender}</p>
    <span>Status: ${user.status}</span>
    `;
        userContainer.appendChild(div)
    }
}