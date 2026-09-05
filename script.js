// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

// Smooth Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Send Message
function sendMessage() {
  const name = document.querySelector('input[type="text"]').value;
  if (name.trim()) {
    alert(`Thanks for reaching out, ${name}! I'll get back to you soon. 🚀`);
    document.querySelector('.contact-form').reset();
  } else {
    alert('Please tell me your name first! 😊');
  }
}

// Fun Facts Easter Egg
const funFacts = [
  "I can also shoot in basketball! 🏀",
  "My favorite programming language is PHP 💻",
  "I've coached netball for 2 years 🏐",
  "I love learning new technologies every day 📚",
  "Netball taught me more than any textbook 🎯",
  "I believe in writing clean, maintainable code ✨",
  "Coffee and code is my favorite combo ☕️",
];

function showFunFact() {
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  alert(randomFact);
}

// Active Navigation on Scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.clientHeight;
    if (window.pageYOffset >= top && window.pageYOffset < bottom) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '';
      });
      const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
      if (activeLink) activeLink.style.color = '#a78bfa';
    }
  });
});

// Micro-interactions on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-item, .card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.5s ease';
  observer.observe(el);
});

console.log('%cWelcome to Rukia\'s Portfolio! 👋', 'font-size: 16px; color: #a78bfa;');