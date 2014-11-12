'use strict';

module.exports = function (req, res, next) {
  res.viewModel = {
    model: {
      title: 'Welcome Home, Taunus!'
    }
  };
  next();
};
