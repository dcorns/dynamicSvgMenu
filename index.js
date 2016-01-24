/**
 * index
 * Created by dcorns on 1/23/16
 * Copyright © 2016 Dale Corns
 * Creates an object for the creation of a dynamic svg menu
 */
'use strict';
module.exports = function(width, height){
  var menu = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  width = width || 100;
  height = height || 25;
  menu.setAttribute('width', width);
  menu.setAttribute('height', height);
  var items = [];
  return{
    setViewBox: function setViewBox(x, y, xr, xy){
      var vb = x || '0' + ' ' + (y || '0') + ' ' + (xr || width) + ' ' + (xy || height);
      menu.setAttribute('viewBox', vb);
    },
    getMenu: function getMenu(){
      return menu;
    },
    addItem: function addItem(id, txt, x, y, fill, iWidth, iHeight, txtXOffset, txtYOffset){
      var item = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      var iText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      item.id = id || '';
      txt = txt || '';
      x = x || 0;
      y = y || 0;
      fill = fill || 'transparent';
      iWidth = iWidth || width;
      iHeight = iHeight || height;
      txtXOffset = txtXOffset || width/2;
      txtYOffset = txtYOffset || 0;
      item.setAttribute('x', x);
      item.setAttribute('y', y);
      item.setAttribute('fill', fill);
      item.setAttribute('width', iWidth);
      item.setAttribute('height', iHeight);
      iText.textContent = txt;
      iText.setAttribute('x', x + txtXOffset);
      iText.setAttribute('y', y + txtYOffset);
      iText.setAttribute('text-anchor', 'middle');
      items.push({'item': item, 'txt': iText});
      menu.appendChild(item);
      menu.appendChild(iText);
    },
    getItems: function getItems(){
      return items;
    }
  }
};