const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const comments = document.getElementById('comments');
    const fields = [fullName, email, country, comments];

    for (const field of fields) {
      if (!field.value.trim()) {
        alert('Please fill in all fields before submitting.');
        field.focus();
        return;
      }
    }

    if (!email.checkValidity()) {
      alert('Please enter a valid email address.');
      email.focus();
      return;
    }

    alert('Your form was submitted successfully!');
    contactForm.reset();
  });
}
