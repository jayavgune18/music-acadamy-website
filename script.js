const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Optional: close menu when link clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully 🎶");
  this.reset();
});
function SendEmail(e) {
  e.preventDefault();

  let params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send(
    "service_f543iri",
    "template_y6q3oh5",
    params
  )
    .then(
      function () {
        alert("Email Sent ✅");
      },
      function (error) {
        alert("Failed ❌");
        console.log(error);
      }
    );
}

