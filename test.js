/**
 * test
 * Created by dcorns on 1/23/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var menu = require('./index.js')(120, 120);
var main = document.getElementById('container');
main.appendChild(menu.getMenu());
menu.setViewBox(0, 0, 120, 120);
menu.getMenu().classList.add('test');
menu.addItem('item2', 'Click Me', 10, 10, 'red', 100, 100);
console.dir(menu.getItems());