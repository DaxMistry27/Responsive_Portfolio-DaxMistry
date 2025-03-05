AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// document.getElementById("contact-form").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent page reload

//   let formData = {
//       name: document.querySelector('input[name="name"]').value,
//       email: document.querySelector('input[name="email"]').value,
//       subject: document.querySelector('input[name="subject"]').value,
//       message: document.querySelector('textarea[name="message"]').value,
//       reply_to: document.querySelector('input[name="email"]').value // Set reply_to
//   };

//   emailjs.send("service_lsxxici", "template_ast5lx5", formData)
//       .then(response => {
//           alert("Message sent successfully!");
//           document.getElementById("contact-form").reset(); // Reset form fields
//       })
//       .catch(error => {
//           alert("Error sending message. Please try again.");
//           console.error("EmailJS Error:", error);
//       });
// });