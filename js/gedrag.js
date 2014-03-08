(function(document){




var hashRegex = /^[\da-f]{3,6}$/;
var hasOctothorpe = /^#/;

var hashIsValidColor = function(hash){
  hash = hasOctothorpe.test(hash) ? hash.slice(1) : hash;
  return hash.length == 3 || hash.length == 6 ? hashRegex.test(hash) : false;
};

var applyColor = function(color, isValid){
  var bod = document.body;
  var h1 = document.querySelector('h1');
  h1 && bod.removeChild(h1);

  if(isValid){
    bod.style.backgroundColor = color;
    bod.insertAdjacentHTML('afterBegin', '<h1>The color is: ' + color + '</h1>');
  }
  else{
    bod.insertAdjacentHTML('afterBegin', '<h1>' + (color.length ? color + ' is not a valid hex color.' : 'Please put a color in this URL’s hash' ) + '</h1>');
  }
};

var init = function(){
  var hash = window.location.hash;
  applyColor(hash, hashIsValidColor(hash));
};

init();


window.addEventListener("hashchange", init, false);




})(document)
