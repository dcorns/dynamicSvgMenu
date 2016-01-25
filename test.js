/**
 * test
 * Created by dcorns on 1/23/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var menu = require('./index.js')(310);
var main = document.getElementById('container');
main.appendChild(menu.getMenu());
menu.getMenu().classList.add('test');
menu.addItem('item1', 'Click Here', null, null, '#49F592', 100, null, null, 18);
menu.addItem('item2', 'Or Here',105, null, '#49F582',null , null, null, 18);
menu.addItem('item3', 'And Not Here',210, null, '#49F582',null , null, null, 18);