import Base from './base';

export default class User extends Base {
  constructor(id) {
    this._id = id;
  }

  // update email
  updateEmail(data, callback) {
    this.request({
      method: 'put',
      url: '/user/email',
      data: data,
      callback: callback
    });
  }

  // update password
  updatePassword(data, callback) {
    this.request({
      method: 'put',
      url: '/user/password',
      data: data,
      callback: callback
    });
  }

  // update address
  updateAddress(data, callback) {
    this.request({
      method: 'put',
      url: '/user/address',
      data: data,
      callback: callback
    });
  }

  // delete address
  deleteAddress(id, data, callback) {
    this.request({
      method: 'delete',
      url: '/user/address/'+id,
      data: data,
      callback: callback
    });
  }
}
