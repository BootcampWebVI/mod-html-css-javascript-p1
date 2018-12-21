
export function menuController() {
    let nav = document.querySelector('.sidenav')
    let isNavVisible = false
    let main = document.querySelector('.main_wrapper')
    let menuIcon = document.querySelector('.menu-icon')

    setMenuDisplay()

    menuIcon.addEventListener('click', clickEventHandler)
    window.addEventListener('resize', resizeEventHandler)


    function resizeEventHandler() {
        setMenuDisplay();
    }

    function clickEventHandler() {
        switchIcon()
        toggleNav()

    }

    function toggleNav(){
        if(isNavVisible){
            hideNav()
        } else {
            showNav()
        }
    }



    function setMenuDisplay(){
        if (window.innerWidth >= 850) {
            showNav()
            hideIcon()
            setBurgerIcon();
        } else {
            hideNav()
            showIcon()
        }
    }




    function showNav() {
        isNavVisible = true;
        nav.style.width = "200px"
        main.style.left = "200px"
    }

    function hideNav() {
        isNavVisible = false;
        nav.style.width = "0";
        main.style.left = "0";

    }

    function showIcon() {
        menuIcon.classList.remove('hide');
    }

    function hideIcon() {
        menuIcon.classList.add('hide');
    }

    function resetIcon() {
        if (window.innerWidth >= 850) {
            menuIcon.classList.add('fa-bars')
            menuIcon.classList.remove('fa-times')
        }
    }

    function switchIcon() {
        menuIcon.classList.toggle('fa-bars')
        menuIcon.classList.toggle('fa-times')
    }

    function setBurgerIcon(){
        menuIcon.classList.add('fa-bars')
        menuIcon.classList.remove('fa-times')
    }

    function setCrossIcon(){
        menuIcon.classList.add('fa-times')
        menuIcon.classList.remove('fa-bars')
    }

}