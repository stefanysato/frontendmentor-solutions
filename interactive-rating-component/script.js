const submitBtn = document.querySelector('.submit-btn')
const ratingPage = document.querySelector('.rating-page')
const tYouPage = document.querySelector('.thankyou-page')
const numBtn = document.querySelectorAll('.n-btn')
const rate = document.querySelector('.rating-msg')

function submit() {
  if (rating === 0) {
    window.alert('You must select your rating to continue!')
    numBtn.forEach(button => {
      button.classList.add('error')
    });
  } else {
    ratingPage.classList.add('hide')
    tYouPage.classList.remove('hide')
    tYouPage.classList.add('show')
    rate.innerHTML = `You selected ${rating} out of 5`
  }
}

let rating = 0
function selectRating(n) {
  rating = n
  // console.log(rating);
}

submitBtn.addEventListener('click', submit);