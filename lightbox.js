function lightbox(el, w, h, close) {
  var bd = document.createElement('div'),
      lb = document.createElement('div'),
      ci = document.createElement('div'),
      cix = document.createTextNode('✕');
  bd.id = 'backdrop';
  bd.addEventListener('click', function (e) {
    if (e.target == document.getElementById('backdrop')) {
      document.getElementById('backdrop').parentNode.removeChild(document.getElementById('backdrop'));
      close();
    }
  });
  lb.id = 'lightbox';
  lb.style.height = h + 'px';
  lb.style.width = w + 'px';
  lb.style.marginTop = '-' + h/2 + 'px';
  lb.style.marginLeft = '-' + w/2 + 'px';
  ci.className = 'close-icon';
  ci.addEventListener('click', function () {
    document.getElementById('backdrop').parentNode.removeChild(document.getElementById('backdrop'));
    close();
  });
  lb.appendChild(el);
  lb.appendChild(ci);
  bd.appendChild(lb);
  document.body.appendChild(bd);
}

function createElement(tagName, attr, child) {
  if (!tagName) return null;
  var el = document.createElement(tagName);
  if (typeof attr === 'object') {
    for (var key in attr) {
      if (attr.hasOwnProperty(key)) {
        if (key === 'text') {
          el.appendChild(document.createTextNode(attr[key]));
        } else if (key === 'click' && typeof attr[key] == 'function') {
          el.addEventListener('click', attr[key]);
        } else if (key === 'style' && typeof attr[key] == 'object') {
          for (var style in attr[key]) {
            if (attr[key].hasOwnProperty(style)) {
              el.style[style] = attr[key][style];
            }
          }
        } else{
          el.setAttribute(key, attr[key]);
        }
      }
    }
    if (Array.isArray(child)) {
      child.forEach(function (cur, i, arr) {
        el.appendChild(cur);
      });
    } else if (typeof child === 'object') {
      el.appendChild(child);
    }
    return el;
  } else {
    return el;
  }
}
