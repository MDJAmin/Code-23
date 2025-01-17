// "use strict";
// const menuIcon = document.querySelector("#menuIcon");
// const overlay = document.querySelector(".overlay");
// const navIcons = document.querySelector(".nav_icons");
// const closeButton = document.querySelector(".close_button");
// const authIcon = document.querySelector("#authIcon");
// const logoutIcon = document.querySelector("#logoutIcon");
// const showSidebar = () => {
//   navIcons.classList.add("show-icons");
//   overlay.classList.add("show-overlay");
// };

// const hideSidebar = () => {
//   navIcons.classList.remove("show-icons");
//   overlay.classList.remove("show-overlay");
// };

// const handleResize = () => {
//   if (window.innerWidth > 500) {
//     hideSidebar();
//   }
// };

// menuIcon.addEventListener("click", showSidebar);
// closeButton.addEventListener("click", hideSidebar);
// overlay.addEventListener("click", hideSidebar);
// window.addEventListener("resize", handleResize);
// const token = localStorage.getItem("token");
// if (token) {
//   authIcon.style.display = "none";
//   logoutIcon.style.display = "block";
// }
// logoutIcon.addEventListener("click", () => {
//   localStorage.removeItem("token");
//   window.location.href = "Pages/index.html";
// });
// const productItems = document.querySelectorAll(".product-item");

// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry, index) => {
//       if (entry.isIntersecting) {

//         entry.target.style.animationDelay = `${index * 0.2}s`;
//         entry.target.classList.add("animate");
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   {
//     threshold: 0.2,
//   }
// );
// productItems.forEach((item, index) => {
//   item.style.transitionDelay = `${index * 0.2}s`;
//   observer.observe(item);
// });

// const lampIcon = document.querySelector(".Lamp_icon");
// const body = document.body;
// lampIcon.addEventListener("click", () => {

//   body.classList.add("theme-transition");


//   body.classList.toggle("light-mode");


//   setTimeout(() => {
//     body.classList.remove("theme-transition");
//   }, 5000);
// });


"use strict";

/* =======================
   Variables Section
========================== */
const menuIcon = document.querySelector("#menuIcon");
const overlay = document.querySelector(".overlay");
const navIcons = document.querySelector(".nav_icons");
const closeButton = document.querySelector(".close_button");
const authIcon = document.querySelector("#authIcon");
const logoutIcon = document.querySelector("#logoutIcon");
const productItems = document.querySelectorAll(".product-item");
const lampIcon = document.querySelector(".Lamp_icon");
const body = document.body;
const token = localStorage.getItem("token");

/* =======================
   Functions Section
========================== */

// Show the sidebar menu
const showSidebar = () => {
  navIcons.classList.add("show-icons");
  overlay.classList.add("show-overlay");
};

// Hide the sidebar menu
const hideSidebar = () => {
  navIcons.classList.remove("show-icons");
  overlay.classList.remove("show-overlay");
};

// Handle window resize to hide sidebar if width exceeds 500px
const handleResize = () => {
  if (window.innerWidth > 500) {
    hideSidebar();
  }
};

// Handle theme toggle with smooth transition
const toggleTheme = () => {
  body.classList.add("theme-transition");
  body.classList.toggle("light-mode");
  setTimeout(() => {
    body.classList.remove("theme-transition");
  }, 5000);
};

// Handle logout functionality
const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "Pages/index.html";
};

// Initialize token-dependent UI
const initializeAuthIcons = () => {
  if (token) {
    authIcon.style.display = "none";
    logoutIcon.style.display = "block";
  }
};

// Initialize product animations
const initializeProductAnimations = () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${index * 0.2}s`;
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  productItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(item);
  });
};

/* =======================
   Event Listeners Section
========================== */

menuIcon.addEventListener("click", showSidebar);
closeButton.addEventListener("click", hideSidebar);
overlay.addEventListener("click", hideSidebar);
window.addEventListener("resize", handleResize);
logoutIcon.addEventListener("click", handleLogout);
lampIcon.addEventListener("click", toggleTheme);

/* =======================
   Initialization Section
========================== */

initializeAuthIcons();
initializeProductAnimations();
