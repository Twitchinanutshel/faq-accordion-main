const accordionButtons = document.querySelectorAll('.accordion-btn')
const fadeIn = document.querySelectorAll('.show')

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling
        answer.classList.toggle('show')

        const plusIcon = button.querySelector(".plus-icon");
        const minusIcon = button.querySelector(".minus-icon");
  
        plusIcon.classList.toggle("hidden");
        minusIcon.classList.toggle("hidden");
    })
})

