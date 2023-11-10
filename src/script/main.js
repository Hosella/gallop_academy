// // slideshow
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1};
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// //btn menu
// const bntMenu = document.getElementById('top__btn-menu');
// const body = document.getElementById('body');
// const menu = document.getElementById('menu');

// const handleMenu = () => {
//   const isHidden = body.matches('.body-hidden');
//   if (isHidden) {
//     body.classList.remove('body-hidden');
//     bntMenu.classList.remove('open');
//     menu.classList.remove('page__menu--open');
//   } else {
//     body.classList.add('body-hidden');
//     bntMenu.classList.add('open');
//     menu.classList.add('page__menu--open');
//   }
// };
// bntMenu.addEventListener('click', handleMenu);

// const links = document.querySelectorAll('.menu__link') || [];
// links?.forEach((link) => {
//   link.addEventListener('click', () => {
//     body.classList.remove('body-hidden');
//     menu.classList.remove('page__menu--open');
//     bntMenu.classList.remove('open');
//   })
// });

// const logo = document.getElementById('logo');
// logo.addEventListener('click', () => {
//   body.classList.remove('body-hidden');
//   menu.classList.remove('page__menu--open');
//   bntMenu.classList.remove('open');
// })

// // animation block
// const blocks = document.querySelectorAll('.block');

// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.1
// };

// const handleIntersection = (entries) => {
//   entries.forEach(entry => {
//     const {classList} = entry.target;
//     if (!classList) {
//       return;
//     }
//     console.log(classList)
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = 1;
//       entry.target.style.top = 0;
//     } else {
//       entry.target.style.opacity = 0;
//       entry.target.style.top = classList.contains('block--left') ? '-40px': '40px';
//     }
//   });
// };

// const observer = new IntersectionObserver(handleIntersection, options);

// blocks.forEach(block => {
//   observer.observe(block);
// });
