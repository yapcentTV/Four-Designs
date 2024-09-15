function showSidebar() {
  const navigation = document.querySelector('.navigation');
  navigation.style.display = 'flex';
}

function hideSidebar() {
  const navigation = document.querySelector('.navigation');
  navigation.style.display = 'none';
}

function checkScreenSize() {
  const navigation = document.querySelector('.navigation');
  if (window.innerWidth > 1000) { // Adjust the width as needed
      navigation.style.display = 'none';
  } 
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);
