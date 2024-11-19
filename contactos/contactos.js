document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
  
      
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  
  hamburger.addEventListener('click', () => {
    console.log('click')
    navMenu.classList.add('responsive');
  });


  navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navMenu.classList.remove('responsive');
    }
  });
  