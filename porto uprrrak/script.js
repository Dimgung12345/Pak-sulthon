const form = document.getElementById('COntact-form');
const nameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;
const succesMsg = document.getElementById('succes-message');
const nameError = document.getElementById('name-eror');
const emailError = document.getElementById('email-eror');
const messageError = document.getElementById('message-eror');

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// window.addEventListener('scroll', function() {
//     let sections = document.querySelectorAll('section');
//     let navLinks = document.querySelectorAll('nav ul');
  
//     sections.forEach(section => {
//       let top = window.scrollY;
//       let offset = section.offsetTop - 150;
//       let height = section.offsetHeight;
//       let id = section.getAttribute('id');
  
//       if (top >= offset && top < offset + height) {
//         navLinks.forEach(link => {
//           link.classList.remove('active');
//           if (link.getAttribute('href').includes(id)) {
//             link.classList.add('active');
//           }
//         });
//       }
//     });
//   });
form.addEventListener('submit',function (e) {
    e.preventDefault();
    nameError.textContent ='';
    emailError.textContent ='';
    messageError.textContent ='';
    succesMsg.textContent='';
    
    let valid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        valid = false;
    }
    if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter your message';
        valid = false;
    }
    if (valid) {
        succesMsg.textContent = 'Thank you! Your message has been sent.';
        form.reset();
    }
});