const counters = document.querySelectorAll(".counter-no");

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-number");
    const count = +counter.innerText;
    const increment = target / 100; // speed: bigger number = faster

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

//===== close navbar-collapse when a  clicked
let navbarTogglerOne = document.querySelector(".navbar-one .navbar-toggler");
navbarTogglerOne.addEventListener("click", function () {
  navbarTogglerOne.classList.toggle("active");
});

document.querySelectorAll(".custom-select").forEach((selectBox) => {
  let input = selectBox.querySelector(".select-input");
  let arrow = selectBox.querySelector(".arrow");
  let dropdown = selectBox.querySelector(".select-dropdown");
  let search = selectBox.querySelector(".dropdown-search");
  let options = dropdown.querySelectorAll(".options span");

  // OPEN/CLOSE DROPDOWN
  input.onclick = () => {
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  };

  arrow.onclick = () => {
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  };

  // SELECT VALUE
  options.forEach((option) => {
    option.onclick = () => {
      input.value = option.innerText;
      dropdown.style.display = "none";
    };
  });

  // LIVE SEARCH
  search.onkeyup = () => {
    let val = search.value.toLowerCase();
    options.forEach((opt) => {
      opt.style.display = opt.innerText.toLowerCase().includes(val)
        ? "block"
        : "none";
    });
  };

  // CLICK OUTSIDE CLOSE
  document.addEventListener("click", (e) => {
    if (!selectBox.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
});
document.querySelectorAll(".mega-parent .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    }
  });
});

const swiper = new Swiper(".marketplace-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 15 },
    992: { slidesPerView: 3, spaceBetween: 20 },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".profile-card-slider", {
    // How many slides to show
    slidesPerView: 1,

    // Space between slides
    spaceBetween: 30,

    // Make it a continuous loop
    loop: true,

    // Autoplay as requested
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // Add pagination dots
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Add navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 576px
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 1200px (matches your image)
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var talentSwiper = new Swiper(".talents-category-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".talent-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".talent-next-btn",
      prevEl: ".talent-prev-btn",
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
});
const text = "Dream Talent Now!";
  const typewriter = document.getElementById("typewriter");
  let index = 0;

  function type() {
    if (index < text.length) {
      typewriter.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 250); 
    } else {
      setTimeout(() => {
        typewriter.innerHTML = "";
        index = 0;
        type();
      }, 2000); 
    }
  }

  type();