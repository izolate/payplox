import Base from './base'

export default class Client extends Base {
  constructor (id) {
    super(id)
  }

  // Update a client
  update (id, data) {
    return this.request({
      method: 'PUT', data: data,
      url: `/clients/${id}`
    })
  }

  // Delete a client
  destroy (id, data) {
    return this.request({
      method: 'DELETE', data: data,
      url: `/clients/${id}`
    })
  }
}
