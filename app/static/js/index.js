import config from './config';
import events from 'events';
import domready from 'domready';

// controllers
import userCtrl from './controllers/user';
import clientCtrl from './controllers/client';

// config
class App extends events.EventEmitter {
  constructor() {
    super(); // init
  }
}

let app = window.app = new App();

// initiate controllers
userCtrl(app);
clientCtrl(app);

// let's go
domready(() => {
  console.info(app.config.name + ' started');
});
