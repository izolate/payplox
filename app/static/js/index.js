import events from 'events'

class App extends events.EventEmitter {
  constructor () {
    super()
  }
}

let app = window.app = new App()

console.info('Payplox app started')
