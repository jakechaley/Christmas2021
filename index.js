// TODO change passwords

const passwords = {
  deah: 'deah',
  mom: 'mom',
  grammy: 'grammy'
}

const people = ['deah', 'mom', 'grammy']

people.forEach(function(person) {
  const form = document.getElementById(`password-form-${person}`)
  form.addEventListener("submit", function (event) {
    event.preventDefault()
    const entered = event.target.elements[`password-${person}`].value
    if (entered === passwords[person]) {
      const mainContent = document.getElementById(`main-content-${person}`)
      mainContent.classList.remove("hidden")
      const submitForm = document.getElementById(`password-form-${person}`)
      submitForm.classList.add("hidden")
      const errorMessage = document.getElementById(`error-message-${person}`)
      errorMessage.classList.add("hidden")
    } else {
      const errorMessage = document.getElementById(`error-message-${person}`)
      errorMessage.classList.remove("hidden")
    }
  })
})
