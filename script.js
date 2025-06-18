  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  next.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // Optional: Auto-slide every 5 seconds
  let autoSlide = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);

  // Pause on hover
  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseover", () => clearInterval(autoSlide));
  slider.addEventListener("mouseout", () => {
    autoSlide = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  });

  // Initial slide
  showSlide(currentSlide);

