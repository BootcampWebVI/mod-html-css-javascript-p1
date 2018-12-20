
export function menuController(){
    let nav = document.querySelector('.sidenav')
    let isNavVisible = false
    let main = document.querySelector('.main_wrapper')
    let menuIcon = document.querySelector('.menu-icon')

    menuIcon.addEventListener('click', toggleNav) 
    window.addEventListener('resize', resetIcon)
    

    function toggleNav(){
        if (isNavVisible){
            hideNav()
            isNavVisible = false
        } else {
            showNav()
            isNavVisible = true
        }
        switchIcon();
    }

    function showNav() {
        nav.style.width = "200px"
        main.style.left = "200px"
    }

    function hideNav(){
        nav.style.width = "0";
        main.style.left = "0";

    }

    function resetIcon(){
        if(window.innerWidth >= 850){
            menuIcon.classList.add('fa-bars')
            menuIcon.classList.remove('fa-times')
        }
    }

    function switchIcon() {
        menuIcon.classList.toggle('fa-bars')
        menuIcon.classList.toggle('fa-times')
    }

}