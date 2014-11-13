'use strict';

module.exports = function (model, container, route) {
  console.log('Rendered view %s using model:\n%s', route.action, JSON.stringify(model, null, 2));
};
