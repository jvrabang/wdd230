const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    const heroImg = document.getElementById('hero-img');
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        heroImg.src = 'images/hero-img-dark.webp';
        heroImg.srcset = 'images/hero-img-dark.webp 651w, images/hero-img-dark-small.webp 650w';
    } else {
        heroImg.src = 'images/hero-img-light1.webp';
        heroImg.srcset = 'images/hero-img-light1.webp 651w, images/hero-img-light-small.webp 650w';
    }
}

function switchTheme(e) {
    const heroImg = document.getElementById('hero-img');
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        heroImg.style.opacity = 0;
        setTimeout(() => {
            heroImg.src = 'images/hero-img-dark.jpg';
            heroImg.srcset = 'images/hero-img-dark.webp 651w, images/hero-img-dark-small.webp 650w';
            heroImg.style.opacity = 1;
        }, 500);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        heroImg.style.opacity = 0;
        setTimeout(() => {
            heroImg.src = 'images/hero-img-light1.webp';
            heroImg.srcset = 'images/hero-img-light1.webp 651w, images/hero-img-light-small.webp 650w';
            heroImg.style.opacity = 1;
        }, 500);
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
