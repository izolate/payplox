var config = {};

// directories
config.dir = {
  assets: './app/assets',
  dist: './app/assets/dist',
  styl: './app/assets/styl',
  js: './app/assets/js'
};

// index files
config.index = {
  styl: config.dir.styl + '/index.styl',
  js: config.dir.js + '/index.js'
};

module.exports = config;
