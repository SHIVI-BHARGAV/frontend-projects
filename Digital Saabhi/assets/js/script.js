// ===============================
// NAVBAR TOGGLE
// ===============================
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

elemArr.forEach((el) => {
  el.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

// ===============================
// NAVBAR CLOSE ON LINK CLICK
// ===============================
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// ===============================
// HEADER & GO-TOP BUTTON ON SCROLL
// ===============================
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});



// ===============================
// HERO-BANNER RESPONSIVE
// ===============================
const heroBannerImg = document.querySelector(".hero-banner img");

function checkHeroBanner() {
  if (window.innerWidth < 992) {
    heroBannerImg.classList.add("hide-image");
  } else {
    heroBannerImg.classList.remove("hide-image");
  }
}

// Run on load
checkHeroBanner();

// Run on resize
window.addEventListener("resize", checkHeroBanner);


    // Dark Mode Toggle
    const toggleBtn = document.getElementById("darkModeToggle");

    // Load user's previous preference
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      toggleBtn.textContent = "☀️";
    }

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("darkMode", "enabled");
      } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("darkMode", "disabled");
      }
    });
  const exploreBtn = document.getElementById('exploreVideoBtn');
const modal = document.getElementById('videoModal');
const closeBtn = document.querySelector('.video-close');
const videoFrame = document.getElementById('heroVideo');

const youtubeURL = "https://www.youtube.com/embed/ZucOiqzRznA?autoplay=1";

exploreBtn.addEventListener('click', () => {
  videoFrame.src = youtubeURL;
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  videoFrame.src = "";
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === modal){
    videoFrame.src = "";
    modal.style.display = 'none';
  }
});
