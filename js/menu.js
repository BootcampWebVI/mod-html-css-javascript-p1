
export function setMenu() {
    let sideNav = document.querySelector('.sidenav')
    let main = document.querySelector('.main_wrapper')
    let menuIcon = document.querySelector('.menu-icon')

    window.addEventListener('resize', resizeMenuController)
    menuIcon.addEventListener('click', menuIconController)

    function menuIconController() {
        
    }


    function resizeMenuController() {
        if (window.innerWidth >= 850) {
            showNav()
        } else {
            hideNav()
        }
    }

    function showNav() {
        sideNav.classList.add('sidenav_visible')
        main.classList.add('main_wrapper_left')
    }

    function hideNav() {
        sideNav.classList.remove('sidenav_visible')
        main.classList.remove('main_wrapper_left')
    }

}