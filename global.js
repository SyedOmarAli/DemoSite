document.getElementsByClassName('btn-hamb').addEventListener("click", navDefaultMobile)
function showNavBar() {
    const navDefaultMobile = document.querySelector('.nav-default-mobile');
    navDefaultMobile.computedStyleMap.visibility =  'visible';
}
