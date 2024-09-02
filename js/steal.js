document.addEventListener('contextmenu', event => {
  event.preventDefault();
});

document.querySelectorAll('.disabled').forEach(element => {
  element.style.pointerEvents = 'none';
});

$(document).keydown(function (event) {
  if (event.keyCode == 123) { // Prevent F12
      return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
      return false;
  }
});