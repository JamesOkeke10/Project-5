document.addEventListener('DOMContentLoaded', () => {
    // Event Listener for Registration Form
    const regForm = document.getElementById('registration-form');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for registering!');
        });
    }

    // Event Listener for Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('feedback').innerText = "Message sent successfully!";
        });
    }
});
