  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const images = Array.from(document.querySelectorAll('.gallery-grid img'));

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = (index + images.length) % images.length; // wrap-around
    lightboxImg.src = images[currentIndex].src;
    lightbox.style.display = 'flex';
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      showImage(index);
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  nextBtn.addEventListener('click', () => {
    showImage(currentIndex + 1);
  });

  prevBtn.addEventListener('click', () => {
    showImage(currentIndex - 1);
  });

  // Optional: Close lightbox when clicking outside image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // Optional: Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'ArrowRight') showImage(currentIndex + 1);
      if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      if (e.key === 'Escape') lightbox.style.display = 'none';
    }
  });
