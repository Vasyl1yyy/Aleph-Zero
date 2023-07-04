const toggel = document.querySelector('.toggel');
const navbar = document.querySelector('.nav-mob-activ');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu-mob');

toggel.onclick = () => {
  navbar.style.display = 'block'
  setTimeout(function() {
    navbar.style.opacity = '1'
    toggel.style.display = 'none'
    close.style.display = 'block'
    menu.classList.add('menu-mob-anim');
  },200)
}

close.onclick = () => {
  navbar.style.opacity = '0'
  menu.classList.remove('menu-mob-anim');
  setTimeout(function() {
    navbar.style.display = 'none'
    toggel.style.display = 'block'
    close.style.display = 'none'
  },200)
}