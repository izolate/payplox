/**
 * base model
 */
export default class Base {

  constructor(id) {
    this.id = id;
  }

  // send an AJAX request
  request(data) {
    $.ajax({
      type: data.method,
      url: data.url,
      data: data.data,
      success: function(resp) {
        data.callback(resp);
      }
    });
  }
}
