const navMenu = document.querySelector('#nav-menu')
const navMenuItems = document.querySelector('#nav-menu-items')
const navMenuClose = document.querySelector('#nav-menu-close')
navMenu.addEventListener('click', ()=> {
  //navMenuItems.style.display = "flex";
  navMenuItems.classList.remove('hidden')
  navMenuItems.classList.add('show')
})

navMenuClose.addEventListener('click', ()=>{
  navMenuItems.classList.remove('show')
  navMenuItems.classList.add('hidden')
  
})