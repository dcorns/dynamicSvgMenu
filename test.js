/**
 * test
 * Created by dcorns on 1/23/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var menu = require('./index.js')(120, 120);
menu.setViewBox(0, 0, 120, 120);
menu.getMenu().classList.add('test');
var main = document.getElementById('container');
menu.addItem('item2', 'Click Me', 10, 10, 'blue', 100, 100);
main.appendChild(menu.getMenu());
console.dir(menu.getMenu());
console.dir(document.getElementById('fart'));