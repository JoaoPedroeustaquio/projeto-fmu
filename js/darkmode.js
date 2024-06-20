


document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('darkModeToggle');
  const bodyElement = document.body;
  const images = document.querySelectorAll('img[data-light][data-dark]');

  toggleButton.addEventListener('click', () => {
      bodyElement.classList.toggle('dark-mode');
      updateImages();
  });

  function updateImages() {
      images.forEach(img => {
          if (bodyElement.classList.contains('dark-mode')) {
              img.src = img.getAttribute('data-dark');
          } else {
              img.src = img.getAttribute('data-light');
          }
      });
  }

  // Inicializar as imagens ao carregar a página
  updateImages();
});
