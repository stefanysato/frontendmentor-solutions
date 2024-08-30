const dayInput = document.querySelector("#day_input");
const monthInput = document.querySelector("#month_input");
const yearInput = document.querySelector("#year_input");
const button = document.querySelector('.form_button');

const yearsHTML = document.querySelector('.years');
const monthsHTML = document.querySelector('.months');
const daysHTML = document.querySelector('.days');

const dayError = document.querySelector('.day_error');
const monthError = document.querySelector('.month_error');
const yearError = document.querySelector('.year_error');

const currentDate = new Date();

const dayTitle = document.querySelector('.day_title');
const monthTitle = document.querySelector('.month_title');
const yearTitle = document.querySelector('.year_title');

dayInput.focus();

function checkDayInput() {
   if (dayInput.value == "") {
      dayError.innerText = 'This field is required';
      dayInput.classList.add('error');
      dayTitle.classList.add('error_text');
      return false;
   } else if (dayInput.value < 1 || dayInput.value > 31) {
      dayError.innerText = 'Must be a valid day';
      dayInput.classList.add('error');
      dayTitle.classList.add('error_text');
      return false;
   } else {
      dayTitle.classList.remove('error_text');
      dayError.innerText = '';
      dayInput.classList.remove('error');
      return true;
   }
}

function checkMonthInput() {
   if (monthInput.value == "") {
      monthError.innerText = 'This field is required';
      monthInput.classList.add('error');
      monthTitle.classList.add('error_text');
      return false;
   } else if (monthInput.value < 1 || monthInput.value > 12) {
      monthError.innerText = 'Must be a valid month';
      monthInput.classList.add('error');
      monthTitle.classList.add('error_text');
      return false;
   } else {
      monthTitle.classList.remove('error_text');
      monthError.innerText = '';
      monthInput.classList.remove('error');
      return true;
   }
}

function checkYearInput() {
   if (yearInput.value == "") {
      yearError.innerText = 'This field is required';
      yearInput.classList.add('error');
      yearTitle.classList.add('error_text');
      return false;
   } else if (yearInput.value > currentDate.getFullYear()) {
      yearError.innerText = 'Must be in the past';
      yearInput.classList.add('error');
      yearTitle.classList.add('error_text');
      return false;
   } else {
      yearTitle.classList.remove('error_text');
      yearError.innerText = '';
      yearInput.classList.remove('error');
      return true;
   }
}

function calculateAge(birthday) {
   let birthdate = new Date(birthday);

   let years = currentDate.getFullYear() - birthdate.getFullYear();
   let months = currentDate.getMonth() - birthdate.getMonth();
   let days = currentDate.getDate() - birthdate.getDate();


   // if birth month and date > current month and date, subtract from year
   if (months < 0 || (months === 0 && days < 0)) {
      years--;
      if (months === 0) {
         months = 11;
      } else {
         months = 12 + months;
      }
      days = 30 + days;
   }

   daysHTML.innerText = days;
   monthsHTML.innerText = months;
   yearsHTML.innerText = years;

   dayInput.value = "";
   monthInput.value = "";
   yearInput.value = "";
   dayInput.focus();
}

button.addEventListener('click', () => {
   let day = checkDayInput();
   let month = checkMonthInput();
   let year = checkYearInput();

   if (!day || !month || !year) {
      return
   } else {
      let birthday = `${monthInput.value}/${dayInput.value}/${yearInput.value}`
      // MM/dd/yyyy

      calculateAge(birthday);
   }
});