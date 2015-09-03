import events from 'events'
import controllers from './ctrl/controllers'

class App extends events.EventEmitter {
  constructor () {
    super()
  }
}

let app = window.app = new App()

// Run controllers
controllers.forEach(ctrl => ctrl(app))

console.info('Payplox app started')
