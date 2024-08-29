const cvcHtml = document.querySelector('#cvc');
const numberHtml = document.querySelector('#number');
const nameHtml = document.querySelector("#name");
const monthHtml = document.querySelector('#month');
const yearHtml = document.querySelector('#year');

const nameInput = document.querySelector('#card_name');
const cardNumberInput = document.querySelector('#card_number');
const expDateMonthInput = document.querySelector('#card_month');
const expDateYearInput = document.querySelector('#card_year');
const cvcInput = document.querySelector('#card_cvc');

const button = document.querySelector('#submit_button');
const formContainer = document.querySelector('.form_section');
const thankYouPage = document.querySelector('.thankyou_page');

nameInput.focus();

nameInput.oninput = (e) => {
   nameHtml.innerText = e.target.value;
}

cardNumberInput.oninput = () => {
   let cardNumber = cardNumberInput.value;

   //Allow numbers only
   let formattedCardNumber = cardNumber.replace(/\D/g, "");
   formattedCardNumber = formattedCardNumber.substring(0, 16);

   let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
   if (cardNumberSections !== null) {
      formattedCardNumber = cardNumberSections.join(' ');
   }

   // If the formmattedCardNumber is different to what is shown, change the value
   if (cardNumber !== formattedCardNumber) {
      cardNumberInput.value = formattedCardNumber;
   }

   numberHtml.innerText = cardNumberInput.value;
}

expDateMonthInput.oninput = (e) => {
   monthHtml.innerText = e.target.value;

   if (e.target.value.length == 2) {
      expDateYearInput.focus();
   }
}

expDateYearInput.oninput = (e) => {
   yearHtml.innerText = e.target.value;

   if (e.target.value.length == 2) {
      cvcInput.focus();
   }
}

cvcInput.oninput = (e) => {
   cvcHtml.innerText = e.target.value;
}

const errorDate = document.querySelector('#error_date');
const errorCvc = document.querySelector('#error_cvc');

function checkMonthInput() {
   if (expDateMonthInput.value == '') {
      errorDate.innerText = `Can't be blank`;
      expDateMonthInput.classList.add('error');
      return false;
   } else {
      errorDate.innerText = '';
      expDateMonthInput.classList.remove('error');
      return true;
   }
}

function checkYearInput() {
   if (expDateYearInput.value == '') {
      errorDate.innerText = `Can't be blank`;
      expDateYearInput.classList.add('error');
      return false;
   } else {
      errorDate.innerText = '';
      expDateYearInput.classList.remove('error');
      return true;
   }
}

function checkCvcInput() {
   if (cvcInput.value == '') {
      cvcInput.classList.add('error');
      errorCvc.innerText = `Can't be blank`
      return false;
   } else {
      cvcInput.classList.remove('error');
      errorCvc.innerText = '';
      return true;
   }
}

document.onkeydown = function () {
   if (window.event.keyCode == '13') {
      submitForm();
   }
}

button.addEventListener("click", submitForm);

function submitForm() {
   let month = checkMonthInput();
   let year = checkYearInput();
   let cvc = checkCvcInput();

   if (!month || !year || !cvc) {
      return
   } else {
      thankYouPage.classList.remove('hide');
      formContainer.classList.add('hide');
   }
}