let count = localStorage.getItem('visitCount') || 0;
count++;
document.getElementById('visitCount').textContent = count;
localStorage.setItem('visitCount', count);

