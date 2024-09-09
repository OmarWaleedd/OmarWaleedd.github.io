document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
  
      if (name === '' || email === '') {
        alert('Please fill in all fields.');
        event.preventDefault();
      }
    });
  });
