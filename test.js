/**
 * test
 * Created by dcorns on 1/23/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var menu = require('./index.js')({cb: callBack});
var main = document.getElementById('container');
main.appendChild(menu.getMenu());
menu.getMenu().classList.add('test');
menu.addItem({txt: 'Click Here', fill: '#49F592', width: 100});
menu.addItem({txt: 'Or Here', fill: '#49F592'});
menu.addItem({txt: 'And Not Here', fill: '#49F592'});
menu.addItem({txt: 'Maybe Here', fill: '#49F592'});
menu.addItem({txt: 'Maybe Not Here', fill: '#49F592'});
menu.addItem({txt: 'What Ever Dude', fill: '#49F592'});
menu.addItem({txt: 'Maybe Not Here', fill: '#49F592', width: 200});
menu.drawXreference();

function callBack(data){
  console.dir(data);
}