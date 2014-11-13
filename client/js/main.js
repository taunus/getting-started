'use strict';

var taunus = require('taunus');
var wiring = require('../../.bin/wiring');
var main = document.getElementsByTagName('main')[0];

taunus.mount(main, wiring);

global.taunus = taunus;
