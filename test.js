/**
 * test
 * Created by dcorns on 1/23/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var menu = require('./index.js')({cb: callBack, width: 400, height: 400});
var main = document.getElementById('container');
main.appendChild(menu.getMenu());
menu.getMenu().classList.add('test');
//menu.addItem({txt: 'Click Here', fill: '#49F592', width: 100});
//menu.addItem({txt: 'Or Here', fill: '#49F592'});
//menu.addItem({txt: 'And Not Here', fill: '#49F592'});
//menu.addItem({txt: 'Maybe Here', fill: '#49F592'});
//menu.addItem({txt: 'Maybe Not Here', fill: '#49F592'});
//menu.addItem({txt: 'What Ever Dude', fill: '#49F592'});
//menu.addItem({txt: 'Maybe Not Here', fill: '#49F592', width: 200});

function callBack(data){
  console.dir(data);
}

menu.drawXreference();
menu.setViewBox(0);
var frm = document.getElementById('view-inputs');
frm.addEventListener('change', function resetView(e){
  var i = e.target.parentNode;
  menu.setViewBox(i[0].value,i[1].value,i[2].value,i[3].value);

});
