import Serialize from 'form-serialize'

const main = document.querySelector('main.settings')

export default (app) => {
  if (!main) return

  const form = main.querySelector('form')

  app.on('window:load', () => {
    app.delegate.on('click', 'input:disabled', e => enablePasswordInput.call(e.target))
  })

  form.addEventListener('submit', e => {
    e.preventDefault()
    let data = formData.call(e.target)
    console.log(data)
  })
}

// Show password inputs & remove :disabled attribute
function enablePasswordInput () {
  this.value = ''
  this.disabled = false
  this.placeholder = 'Old password'
  this.parentNode.classList.remove('inactive')
  this.nextElementSibling.classList.remove('hidden')

  return this.focus()
}

// Serialize form data
function formData () {
  let data = Serialize(this, { hash: true })
  data._csrf = this.dataset.csrf
  data.userId = this.dataset.userId

  return data
}
