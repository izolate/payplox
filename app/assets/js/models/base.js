/**
 * base model
 */
export default class Base {

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
