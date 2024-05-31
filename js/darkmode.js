
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const images = document.querySelectorAll('img[data-light][data-dark]');
  
    toggleButton.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      const isDarkMode = body.classList.contains('dark-mode');
      images.forEach(img => {
        img.src = isDarkMode ? img.getAttribute('data-dark') : img.getAttribute('data-light');
      });
      
    });
  });
  