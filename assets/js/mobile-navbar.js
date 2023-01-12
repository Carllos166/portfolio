class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, overflowBody) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.overflowBody = "scroll"

        this.handleClick = this.handleClick.bind(this) // Para se referir diretamente a classe e não ao "botão" em si.
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "") // Caso exista animation no style link, deixa vazio
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass) // animacao no menu
        if (this.navList.classList.contains(this.activeClass)) {
            this.overflowBody = 'hidden'
            document.body.style.overflow = this.overflowBody
        } else {
            this.overflowBody = 'scroll'
            document.body.style.overflow = this.overflowBody
        }




        // if (this.navList.classList.contains(this.activeClass)) {
        //     this.overflowBody = 'hidden'
        //     document.body.style.overflow = this.overflowBody
        // } else {
        //     this.overflowBody = 'scroll'
        //     document.body.style.overflow = this.overflowBody
        // }
        this.animateLinks();
    }


    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();