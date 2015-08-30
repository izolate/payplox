import Base from './base'

export default class User extends Base {
  constructor (id) {
    super(id)
  }

  /**
   * Updates
   */
  updateEmail (data) {
    return this.request({
      method: 'PUT', data: data,
      url: '/user/email'
    })
  }

  updatePassword (data) {
    return this.request({
      method: 'PUT', data: data,
      url: '/user/password'
    })
  }

  updateAddress (data) {
    return this.request({
      method: 'PUT', data: data,
      url: '/user/address'
    })
  }

  updatePayment (data) {
    return this.request({
      method: 'PUT', data: data,
      url: '/user/payment'
    })
  }

  /**
   * Deletions
   */
  deleteAddress (id, data) {
    return this.request({
      method: 'DELETE', data: data,
      url: `/user/address/${id}`
    })
  }

  deletePayment (id, data) {
    return this.request({
      method: 'DELETE', data: data,
      url: `/user/payment/${id}`
    })
  }
}
