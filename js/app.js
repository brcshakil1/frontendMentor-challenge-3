const navLink = document.querySelector('.navLink');

const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', () => {
    if(!navLink.classList.contains('active')) {
        navLink.classList.add('active');
    }
});

closeMenu.addEventListener('click', () => {
    if(navLink.classList.contains('active')) {
        navLink.classList.remove('active');
    }
})

// change desktop hero image to mobile hero image

window.addEventListener('resize', () => {
    if(window.innerWidth <= 550) {
        document.getElementById('heroImg').src = "assets/images/image-web-3-mobile.jpg"
    } else {
        document.getElementById('heroImg').src = "assets/images/image-web-3-desktop.jpg"
    }
})