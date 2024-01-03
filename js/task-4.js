const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = this.elements.email.value.trim();
  const password = this.elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email,
      password
    };

    console.log(formData);

    this.reset();
  }
});
