function goToSlide(id) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('visible'));
    document.getElementById(id).classList.add('visible');
  
    // Fire confetti only on the final slide
    if (id === 'slide6') {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }
  
  // Music toggle
  const music = document.getElementById('bgMusic');
  const toggleBtn = document.getElementById('musicToggle');
  toggleBtn.onclick = () => {
    if (music.paused) {
      music.play();
      toggleBtn.textContent = '🔊';
    } else {
      music.pause();
      toggleBtn.textContent = '🔇';
    }
  };