function showNavBar() {
    const navDefaultMobile = document.querySelector('.nav-default-mobile');
    navDefaultMobile.style.visibility =  'visible'
    navDefaultMobile.style.display =  'block'
    navDefaultMobile.style.opacity =  '2'
    navDefaultMobile.style.textAlign = 'center';
    navDefaultMobile.style.left =  '0'
    navDefaultMobile.style.width =  '100%'
    navDefaultMobile.style.bottom =  '0'
    navDefaultMobile.style.top =  '25px'
}
function closeFunc() {
    const navDefaultMobile = document.querySelector('.nav-default-mobile');
    navDefaultMobile.style.visibility =  'hidden'
}
