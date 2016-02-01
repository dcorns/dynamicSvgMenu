/**
 * index
 * Created by dcorns on 1/23/16
 * Copyright © 2016 Dale Corns
 * Creates an object for the creation of a dynamic svg menu
 */
'use strict';
module.exports = function(svgMenu){
  var menu = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgMenu = svgMenu || {};
  var width = svgMenu.width || 0;
  var height = svgMenu.height || 25;
  var horizSpace = svgMenu.horizSpace || 5;
  var vertSpace = svgMenu.vertSpace || 0;
  var rows = svgMenu.rows || 0;
  menu.setAttribute('width', width);
  menu.setAttribute('height', height);
  var items = [], iX = 0;
  if(svgMenu.cb){
    menu.addEventListener('click', function(e){
      svgMenu.cb(e.target.getAttribute('data-id'));
    });
  }
  return{
    setViewBox: function setViewBox(x, y, xr, xy){
      var vb = x || '0' + ' ' + (y || '0') + ' ' + (xr || width) + ' ' + (xy || height);
      menu.setAttribute('viewBox', vb);
    },
    getMenu: function getMenu(){
      return menu;
    },
    addItem: function addItem(svgItem){
      var item = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      var iText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      var svgItem = svgItem || {};
      item.id = svgItem.id || '';
      var txt = svgItem.txt || '';
      var x = svgItem.x || iX;
      var y = svgItem.y || 0;
      var iWidth = svgItem.width;
      var fill = svgItem.fill || 'transparent';
      var iHeight  = svgItem.height || height;
      var txtYOffset = svgItem.txtYOffset || 18;
      var txtXOffset = svgItem.txtXOffset;

      if(!iWidth) iWidth = items[0].item.attributes.width.value;
      txtXOffset = txtXOffset || iWidth/2;
      if(items.length > 0){
        iX = iX + horizSpace;
        x = iX;
      }
      iX = iX + parseInt(iWidth);
      width = parseInt(width, 10) + parseInt(iWidth, 10) + parseInt(horizSpace, 10);
      menu.setAttribute('width', (width - horizSpace).toString());

      item.setAttribute('x', x);
      item.setAttribute('y', y);
      item.setAttribute('fill', fill);
      item.setAttribute('width', iWidth);
      item.setAttribute('height', iHeight);
      item.setAttribute('data-id', items.length.toString());
      iText.setAttribute('data-id', items.length.toString());
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
    },
    drawXreference: function drawXYreference(w, h, el){
      var s = document.getElementById(el) || menu;
      w = w || parseInt(s.getAttribute('width'), 10);
      h = h || parseInt(s.getAttribute('height'), 10);
      var y0 = (h-h%2)/2;
      var x0 = (w-w%2)/2;
      var x, y, c=0;
      for (c; c < w; c+=10){
        x = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        x.setAttribute('x1', c.toString());
        x.setAttribute('x2', (c+2).toString());
        x.setAttribute('y1', y0.toString());
        x.setAttribute('y2', y0.toString());
        x.setAttribute('stroke', 'black');
        x.setAttribute('stroke-width', '2');
        s.appendChild(x);
      }
      c = 0;
      for (c; c < h; c+=10){
        y = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        y.setAttribute('x1', x0.toString());
        y.setAttribute('x2', x0.toString());
        y.setAttribute('y1', c.toString());
        y.setAttribute('y2', (c+2).toString());
        y.setAttribute('stroke', 'black');
        y.setAttribute('stroke-width', '2');
        s.appendChild(y);
      }
    }
  }
};