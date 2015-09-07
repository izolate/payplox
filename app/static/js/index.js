require('babel/polyfill')

import events from 'events'
import controllers from './ctrl/controllers'
import { Delegate } from 'dom-delegate'

class App extends events.EventEmitter {
  constructor () {
    super()
  }
}

let app = window.app = new App()

// Event delegation
window.addEventListener('load', e => {
  app.delegate = new Delegate(document.body)
  app.emit('window:load')
})

// Run controllers
controllers.forEach(ctrl => ctrl(app))

console.info('Payplox app started')
