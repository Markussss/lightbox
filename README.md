# lightbox
Simple Javascript lightbox that doesn't rely on any libraries or frameworks.

Sometimes I just want to add a simple lightbox to my projects without adding many facy features and libraries.

## Usage
```
lightbox(element, width, height, close)

description
  element is the Element-object that will be added to the lightbox
  width is the width of the lightbox
  height is the height of the lightbox
  close is a function that will be run after the lightbox is closed
```

## Notes

The master branch relies on a custom createElement-function, made for easily creating HTML elements with several children without having to type pretty much the same over and over again:

```javascript
var bd = document.createElement('div'),
    lb = document.createElement('div'),
    ci = document.createElement('div'),
    cix = document.createTextNode('✕');
  bd.id = 'backdrop';
  lb.id = 'lightbox';
  lb.style.height = h + 'px';
  lb.style.width = w + 'px';
  ci.className = 'close-icon';
  lb.appendChild(el);
  lb.appendChild(ci);
  bd.appendChild(lb);
  document.body.appendChild(bd);
```
is replaced with 

```javascript
  document.body.appendChild('div',
    {
      id: 'backdrop'
    }, [
      createElement('div', {
        id: 'lightbox',
        style: {
          height: h + 'px',
          width: w + 'px'
        }
      }),
      createElement('div', 
      {
        class: 'close-icon',
        text: 'x',
      })
    ]
  );
```

This is probably less efficient than the first way of doing it, but I find that it makes it easier and more enjoyable for me to create HTML in javascript. However, in the branch noCreateElement, the lightbox does not rely on the custom-created createElement-function. Just thought I should add it, in case somebody want to use it for something.
