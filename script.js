gsap.registerPlugin(ScrollTrigger);
gsap.from(".head-container", { duration: 2, opacity: 0, delay: 0 });

gsap.from(".about-me", {
  scrollTrigger: {
    trigger: ".about-me",
    start: "top bottom",
    toggleActions: "restart pause play restart",
  },
  duration: 2.5,
  x: "100vw",
});

gsap.from(".img", {
  scrollTrigger: {
    trigger: ".about-me",
    start: "top bottom",
    toggleActions: "restart pause play restart",
  },
  duration: 4,
  rotation: 720,
  x: "100vw",
});

gsap.from(".experiences", {
  scrollTrigger: {
    trigger: ".experiences",
    start: "top bottom",
    toggleActions: "restart pause play restart",
  },
  duration: 2.5,
  x: "-100vw",
});

/* Navigation */

const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

/* Skill bars */

function animateSkills() {
  const skills = document.querySelectorAll(".skill");

  skills.forEach((skill) => {
    const value = skill.getAttribute("data-value");
    const bar = skill.querySelector(".bar");
    bar.style.width = `${value}%`;

    const logo = skill.querySelector(".logo");
    logo.style.left = `calc(${value}% - 25px)`; // Adjust the value based on logo width
  });
}

function checkVisibility() {
  const skillsSection = document.querySelector(".skill-bar");
  const skillsSectionPos = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const threshold = windowHeight * 0.75;

  if (skillsSectionPos < threshold) {
    animateSkills();
    window.removeEventListener("scroll", checkVisibility);
  }
}

/* Timeline */

window.addEventListener("scroll", checkVisibility);

const stations = document.querySelectorAll(".station");

function checkInView() {
  stations.forEach((station) => {
    const rect = station.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (isInView) {
      station.classList.add("active");
    } else {
      station.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", checkInView);
window.addEventListener("resize", checkInView);

// Check initial view
checkInView();
