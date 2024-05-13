
  const navLinks = document.querySelectorAll('nav a');
  const contentDivs = document.querySelectorAll('.content');

  navLinks.forEach((link, index) => {
    link.addEventListener('click', function() {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      contentDivs.forEach((content) => {
        content.style.display = 'none';
      });
      this.classList.add('active');
      contentDivs[index].style.display = 'block';
    });
});
 
                   //footer js
    // JavaScript to change link color on hover
    const homeLink = document.getElementById('home');
    const contactLink = document.getElementById('contact');
    const aboutLink = document.getElementById('about');
    
    homeLink.addEventListener('mouseover', () => {
        homeLink.style.color = '#ff6600';
    });
    
    homeLink.addEventListener('mouseout', () => {
        homeLink.style.color = 'white';
    });
    
    contactLink.addEventListener('mouseover', () => {
        contactLink.style.color = '#ff6600';
    });
    
    contactLink.addEventListener('mouseout', () => {
        contactLink.style.color = 'white';
    });
    
    aboutLink.addEventListener('mouseover', () => {
        aboutLink.style.color = '#ff6600';
    });
    
    aboutLink.addEventListener('mouseout', () => {
        aboutLink.style.color = 'white';
    });

