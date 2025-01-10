// Intersection Observer for all items in the container
const items = document.querySelectorAll('.container *');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add "_in-view" class when 10% of the element is visible
        entry.target.classList.add('_in-view');
      }
    });
  },
  { threshold: 0.10 } // Trigger when 10% of the element is visible
);

// Observe each item
items.forEach((item) => observer.observe(item));

// Hover effects for features cells
const cells = document.querySelectorAll('.features-cell');

cells.forEach((cell) => {
  cell.addEventListener('mouseover', () => {
    const icons = cell.querySelectorAll('.features-cell-icon');
    const arrows = cell.querySelectorAll('.features-cell-arrow');

    icons.forEach((icon) => {
      icon.style.fill = 'var(--primary-background-color)'; // Set hover color
      icon.style.transition = '0.2s'; // Smooth transition
    });

    arrows.forEach((arrow) => {
      arrow.style.fill = 'var(--primary-background-color)'; // Set hover color
      arrow.style.transition = '0.2s'; // Smooth transition
    });
  });

  cell.addEventListener('mouseout', () => {
    const icons = cell.querySelectorAll('.features-cell-icon');
    const arrows = cell.querySelectorAll('.features-cell-arrow');

    icons.forEach((icon) => {
      icon.style.fill = ''; // Reset to default
    });

    arrows.forEach((arrow) => {
      arrow.style.fill = ''; // Reset to default
    });
  });
});

// Hide/show header on scroll
const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add('hidden'); // Hide header when scrolling down
  } else {
    header.classList.remove('hidden'); // Show header when scrolling up
  }
  lastScrollY = window.scrollY;
});

// Toggle main navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const mainNavMenu = document.querySelector('.mainNav-menu');

menuToggle.addEventListener('click', () => {
  mainNavMenu.classList.toggle('open'); // Toggle "open" class for the menu
});

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.side-menu ul li a');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
