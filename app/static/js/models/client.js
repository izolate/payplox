import Base from './base';

export default class Client extends Base {
  constructor(id) {
    super(id);
  }

  // update a client
  update(id, data, callback) {
    this.request({
      method: 'put',
      url: '/clients/'+id,
      data: data,
      callback: callback
    });
  }

  // delete a client
  destroy(id, data, callback) {
    this.request({
      method: 'delete',
      url: '/clients/'+id,
      data: data,
      callback: callback
    });
  }
}
