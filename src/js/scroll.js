
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', scrollToSection);
});


function scrollToSection(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href').substring(1); 
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    const offset = targetSection.getBoundingClientRect().top;
    window.scrollTo({
      top: offset,
      behavior: 'smooth', 
    });
  }
}