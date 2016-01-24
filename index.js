/**
 * index
 * Created by dcorns on 1/23/16
 * Copyright © 2016 Dale Corns
 * Creates an object for the creation of a dynamic svg menu
 */
'use strict';
module.exports = function(width, height){
  var menu = document.createElement('svg');
  menu.setAttribute('width', width);
  menu.setAttribute('height', height);
  var items = [];
  return{
    setViewBox: function setViewBox(x, y, xr, xy){
      var vb = x || '0' + ' ' + (y || '0') + ' ' + (xr || '') + ' ' + (xy || '') + ' ';
      menu.setAttribute('viewBox', vb);
    },
    getMenu: function getMenu(){
      return menu;
    },
    addItem: function addItem(id, txt, x, y, fill, width, height){
      var item = document.createElement('rect');
      var iText = document.createElement('text');
      item.id = id;
      item.setAttribute('x', x);
      item.setAttribute('y', y);
      item.setAttribute('fill', 'blue');
      item.setAttribute('width', width);
      item.setAttribute('height', height);
      iText.textContent = txt || '';
      iText.setAttribute('x', x + 10);
      iText.setAttribute('y', y);
      items.push({'item': item, 'txt': iText});
      menu.appendChild(item);
      menu.appendChild(iText);
    }
  }
};