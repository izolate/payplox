import forEach from 'foreach'

const nav = document.querySelector('.tabs__nav')
const sections = Array.from(document.querySelectorAll('.tabs__content'))

export default (app) => {
  if (!nav) return

  app.on('change-tab', el => changeTab.call(el, el.dataset.target))

  app.on('window:load', () => {
    app.delegate.on('click', '.tabs__nav a', e => app.emit('change-tab', e.target))
  })
}

function changeTab (targetClass) {
  forEach(nav.children, link => link.classList.remove('active'))
  forEach(sections, section => section.classList.add('hidden'))

  // add active class to correct nav element
  this.classList.add('active')

  // show the appropriate section
  for (let i = sections.length; i--;)
    if (sections[i].matches(`.${targetClass}`)) sections[i].classList.remove('hidden')
}
