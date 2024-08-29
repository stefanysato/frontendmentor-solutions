const accordionList = document.querySelectorAll('.question-title');

function activeAccordion() {
   this.classList.toggle('active');
   this.nextElementSibling.classList.toggle('active');
}

accordionList.forEach((question) => {
   question.addEventListener('click', activeAccordion);
});