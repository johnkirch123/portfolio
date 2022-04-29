(function () {
  emailjs.init('0Ia7EDJzNo_vGHJGA');
})();

window.onload = function () {
  document
    .querySelector('#contact__form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      if (document.querySelector('#user_name').value === '')
        message('Please enter your name.');
      if (document.querySelector('#user_email').value === '')
        message('Please enter your email.');
      if (document.querySelector('#user_message').value === '')
        message('Please enter some information about your request.');
      else {
        emailjs.sendForm('service_5nrcgxt', 'template_nuvh7dt', this).then(
          () => {
            clearInputs();
            message(
              'Your Message has successfully been sent. Please expect a reply back within 1-2 business days. Thank you!'
            );
          },
          (error) => {
            message(error.message);
          }
        );
      }
    });
};

const message = (msg) => {
  document.querySelector('.contact__form--message').innerText = msg;
  setTimeout(() => {
    document.querySelector('.contact__form--message').innerText = '';
  }, 6000);
};

const clearInputs = () => {
  document.querySelector('#user_name').value = '';
  document.querySelector('#user_email').value = '';
  document.querySelector('#user_message').value = '';
};
