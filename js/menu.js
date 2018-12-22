
export function setMenu() {
    let sideNav = document.querySelector('.sidenav')
    let main = document.querySelector('.main_wrapper')
    let menuIcon = document.querySelector('.menu-icon')

    window.addEventListener('resize', resizeMenuController)
    menuIcon.addEventListener('click', menuIconController)

    function menuIconController() {
        toggleNav()
        toggleIcon()
    }

    function toggleIcon() {
        menuIcon.classList.toggle('fa-times')
        menuIcon.classList.toggle('fa-bars')
    }

    function resetIcon() {
        menuIcon.classList.remove('fa-times')
        menuIcon.classList.add('fa-bars')
    }


    function resizeMenuController() {
        if (window.innerWidth >= 850) {
            resetIcon()
            resetNav()
        }
    }

    function toggleNav() {
        sideNav.classList.toggle('sidenav_visible')
        main.classList.toggle('main_wrapper_left')
    }

    function resetNav() {
        sideNav.classList.remove('sidenav_visible')
        main.classList.remove('main_wrapper_left')
    }

}