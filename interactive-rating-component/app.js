const buttons = document.querySelectorAll('.btn-rate')
const btnSubmit = document.querySelector('.btn-submit')
const submitState = document.querySelector('.thank-you')
const ratingState = document.querySelector('.rating-state')
const rateNumber = document.querySelector('.rate-number')

btnSubmit.addEventListener('click', () => {
    ratingState.classList.add('hidden');
    submitState.classList.remove('hidden');
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.innerText);
        rateNumber.innerText = `You selected ${button.innerText} out of 5`;
    })
})
