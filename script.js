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

gsap.from(".html", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top bottom",
    toggleActions: "restart pause play restart",
  },
  duration: 2.5,
  x: "-100vw",
});

/* gsap.to(".html", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top bottom",
    toggleActions: "restart pause play restart",
  },
  duration: 2.5,
  ease: CustomEase.create(
    "custom",
    "M0,0 C0.272,0 0.452,-0.001 0.5,0 0.638,0 0.744,0 1,0 "
  ),
  x: "-100vw",
}); */

/* gsap.from(".experiences", {
  scrollTrigger: {
    trigger: ".experiences",
    start: "top top",
    markers: true,
    toggleActions: "restart pause pause pause",
  },
  duration: 2,
  x: "-100vw",
}); */

/* const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char, i) => {
  const text = new splitTypes(char, { types: "chars" });
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
    },
    opacity: 0.2,
    stagger: 0.1,
  });
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
} 

requestAnimationFrame(raf); */

/* window.addEventListener("scroll", function () {
  var headContainer = document.querySelector(".head-container");
  var bodyContainer = document.querySelector(".body-container");
  var scrollPosition = window.scrollY;

  if (scrollPosition <= window.innerHeight) {
    headContainer.style.opacity = "0";
    headContainer.style.pointerEvents = "none";
    bodyContainer.style.display = "block";
  } else {
    headContainer.style.opacity = "1";
    headContainer.style.pointerEvents = "auto";
    bodyContainer.style.display = "none";
  }
}); */
