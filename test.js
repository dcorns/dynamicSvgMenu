/**
 * test
 * Created by dcorns on 1/23/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var menu = require('./index.js')();
var main = document.getElementById('container');
main.appendChild(menu.getMenu());
//menu.setViewBox();
//menu.getMenu().classList.add('test');
menu.addItem('item1', 'Click Here', null, null, '#49F592', null, null, null, 18);