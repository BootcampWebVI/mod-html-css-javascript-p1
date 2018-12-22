
export function setMenu() {
    let sideNav = document.querySelector('.sidenav')
    let main = document.querySelector('.main_wrapper')
    let menuIcon = document.querySelector('.menu-icon')

    let menuElements = document.querySelectorAll('nav li')
    let pageSections = document.querySelectorAll('section')
    let sectionsOffsetArray = [];

    /* TODO Scrollspy */

    setSectionsOffsetArray();
    console.log(sectionsOffsetArray)
    console.log(menuElements)


    window.addEventListener('scroll', scrollSpyController)

    function scrollSpyController() {
        let currentOffset = window.pageYOffset;
        let currentMenuElement = 0;

        if (currentOffset >= sectionsOffsetArray['#home']
            && currentOffset < sectionsOffsetArray['#whoami']) {
            currentMenuElement = 0

        } else if (currentOffset >= sectionsOffsetArray['#whoami']
            && currentOffset < sectionsOffsetArray['#studies']) {
            currentMenuElement = 1

        } else if (currentOffset >= sectionsOffsetArray['#studies']
            && currentOffset < sectionsOffsetArray['#experience']) {
            currentMenuElement = 2

        } else if (currentOffset >= sectionsOffsetArray['#experience']
            && currentOffset < sectionsOffsetArray['#about']) {
            currentMenuElement = 3

        } else if (currentOffset >= sectionsOffsetArray['#about']
            && currentOffset < sectionsOffsetArray['#contact']) {
            currentMenuElement = 4
        } else {
            currentMenuElement = 5
        }

        menuElements.forEach(element => element.classList.remove('active'))
        menuElements[currentMenuElement].classList.add('active')


    }

    function setSectionsOffsetArray() {
        pageSections.forEach(section => {
            sectionsOffsetArray['#' + section.id] = section.offsetTop
        })
    }


    /*TODO Repliegue del menu controlado con icono*/
    
    window.addEventListener('resize', resizeMenuController)
    menuIcon.addEventListener('click', menuIconController)

    function menuIconController() {
        toggleNav()
        toggleIcon()
    }

    function resizeMenuController() {
        if (window.innerWidth >= 850) {
            resetIcon()
            resetNav()
        }
    }

    function toggleIcon() {
        menuIcon.classList.toggle('fa-times')
        menuIcon.classList.toggle('fa-bars')
    }

    function resetIcon() {
        menuIcon.classList.remove('fa-times')
        menuIcon.classList.add('fa-bars')
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