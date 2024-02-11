const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.getElementById('hero-img').src = 'images/hero-img-dark.jpg'; // Set dark mode hero image initially
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
            heroImg.style.opacity = 1; 
        }, 500); 
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        heroImg.style.opacity = 0; 
        setTimeout(() => {
            heroImg.src = 'images/hero-img-light.jpg'; 
            heroImg.style.opacity = 1; 
        }, 500); 
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
