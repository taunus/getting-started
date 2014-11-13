'use strict';

module.exports = function (model, container, route) {
  console.log('Rendered view %s using model %s', route.action, model);
};
