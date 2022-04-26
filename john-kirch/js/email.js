(function () {
  emailjs.init('0Ia7EDJzNo_vGHJGA');
})();

window.onload = function () {
  document
    .querySelector('#contact__form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      setTimeout(() => {
        document
          .querySelector('.contact__form-toasty')
          .setAttribute('display', 'block');
      }, 3000);
      emailjs.sendForm('service_5nrcgxt', 'template_nuvh7dt', this).then(
        () => {
          document.querySelector('#user_name').value = '';
          document.querySelector('#user_email').value = '';
          document.querySelector('#user_message').value = '';
          document.querySelector('.contact__form-toasty').style.display =
            'inline-block';
          setTimeout(() => {
            document.querySelector('.contact__form-toasty').style.display =
              'none';
          }, 6000);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
    });
};
