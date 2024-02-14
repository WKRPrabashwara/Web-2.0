const header = document.querySelector("header");

/* --------------- Grab elements from DOM --------------- */

/* --------------- Sticky Navbar --------------- */

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* --------------- Reveal Animation --------------- */

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });
sr.reveal(".showcase-square", { delay: 750 });

/* --------------- Skills Progress Bar Animation --------------- */

/* --------------- Services Counter Animation --------------- */

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */

/* --------------- Exploring button Update ( Use Default (ChatGPT-3.5)) --------------- */

// document.addEventListener("DOMContentLoaded", function () {
//     const scrollLink = document.getElementById("scroll-link");

//     if (scrollLink) {
//         scrollLink.addEventListener("click", function (e) {
//             e.preventDefault();
//             const targetId = "#about";
//             const targetElement = document.querySelector(targetId);

//             if (targetElement) {
//                 const offset = targetElement.offsetTop - 100;
//                 const duration = 1000;

//                 scrollToSmoothly(offset, duration);
//             }
//         });
//     }
// });

// function scrollToSmoothly(offset, duration) {
//     const start = window.pageYOffset;
//     const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

//     function scroll() {
//         const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
//         const elapsed = currentTime - startTime;

//         window.scrollTo(0, easeInOutCubic(elapsed, start, offset, duration));

//         if (elapsed < duration) {
//             requestAnimationFrame(scroll);
//         }
//     }

//     function easeInOutCubic(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t * t + b;
//         t -= 2;
//         return c / 2 * (t * t * t + 2) + b;
//     }

//     requestAnimationFrame(scroll);
// }


// /* --------------- Right click , copy & paste block --------------- */

// let x = 0;

// jQuery(document).ready(function () {
//     jQuery(function () {
//         jQuery(this).bind("contextmenu", function (event) {
//             event.preventDefault();
//             alert("Sorry, right click is not allowed !");
//             x = x + 1;
//             if (x == 10) {
//                 location.reload();
//             };
//         });
//     });
//     (function () {
//         'use strict';
//         let style = document.createElement('style');
//         style.innerHTML = '*{ user-select: none !important; }';

//         document.body.appendChild(style);
//     })();
//     window.onload = function () {
//         document.addEventListener("contextmenu", function (e) {
//             e.preventDefault();
//         }, false);
//         document.addEventListener("keydown", function (e) {
//             if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//                 disabledEvent(e);
//             }

//             if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//                 disabledEvent(e);
//             }

//             if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
//                 disabledEvent(e);
//             }

//             if (e.ctrlKey && e.keyCode == 85) {
//                 disabledEvent(e);
//             }

//             // Disable F12 (Inspect Element)
//             if (e.keyCode == 123) {
//                 disabledEvent(e);
//             }
//         }, false);
//         function disabledEvent(e) {
//             if (e.stopPropagation) {
//                 e.stopPropagation();
//             } else if (window.event) {
//                 window.event.cancelBubble = true;
//             }
//             e.preventDefault();
//             return false;
//         }
//     }
// });
