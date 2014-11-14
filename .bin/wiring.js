'use strict';

var templates = {
  'home/index': require('./views/home/index.js'),
  'layout': require('./views/layout.js')
};

var controllers = {
  'home/index': require('../client/js/controllers/home/index.js')
};

var routes = [
  {
    route: '/',
    action: 'home/index'
  }
];

module.exports = {
  templates: templates,
  controllers: controllers,
  routes: routes
};
