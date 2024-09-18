const bdy = document.getElementById('dashboard');
const switchBtn = document.getElementById('switch');
switchBtn.addEventListener('click', changeTheme)

function changeTheme() {
    bdy.classList.toggle("dark-theme");
}