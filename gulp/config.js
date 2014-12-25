var Config = function () {
  this.assets = 'app/assets';
  this.dist = this.assets + '/dist';
  this.indexjs = this.assets + '/js/index.js';
};

module.exports = new Config();
