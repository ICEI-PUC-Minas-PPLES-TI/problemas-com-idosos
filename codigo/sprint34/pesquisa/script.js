document.addEventListener('DOMContentLoaded', function() {
  const inputContact = document.getElementById('inputContact');
  const contactBoxes = document.getElementsByClassName('contact-box');

  inputContact.addEventListener('input', function() {
    const searchQuery = inputContact.value.toLowerCase();
    
    for (let i = 0; i < contactBoxes.length; i++) {
      const contactName = contactBoxes[i].querySelector('.contact-name').textContent.toLowerCase();
      
      if (contactName.includes(searchQuery)) {
        contactBoxes[i].style.display = 'block';
      } else {
        contactBoxes[i].style.display = 'none';
      }
    }
  });
});
