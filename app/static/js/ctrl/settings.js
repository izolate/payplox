import { Delegate } from 'dom-delegate'

const main = document.querySelector('main.settings')

export default (app) => {
  if (!main) return

  window.addEventListener('load', () => {
    const delegate = new Delegate(document.body)
  })
}
