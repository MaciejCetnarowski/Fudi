const phone = document.querySelector('.app-container img');

function showPhone() {
    if (window.scrollY + phone.height > phone.offsetTop) {
        phone.classList.add('rotate');
    }
}
window.addEventListener('scroll', showPhone);
