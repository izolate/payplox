export default class Base {

  constructor (id) {
    this.id = id
  }

  // Send an HTTP request
  request (options) {
    return fetch(options.url, {
      method: options.method.toUpperCase(),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json
      },
      body: JSON.stringify(options.data)
    })
  }
}
