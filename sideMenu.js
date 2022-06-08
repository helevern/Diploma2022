function SideMenu() {
    const burgerMenu = document.querySelector(".burgerMenu");

    const sideMenuContainer = document.querySelector(".sideMenuContainer");
    const OPEN_SIDEMENU_CLASSNAME = "openSideMenu";

    let isModalOpen = false;

    function toggleModal () {
        sideMenuContainer.classList.toggle(OPEN_SIDEMENU_CLASSNAME);
        isModalOpen = !isModalOpen;
        if (isModalOpen){
            document.body.style.overflow = "hidden";
            sideMenuContainer.focus();
        } else {
            document.body.style.overflow = "auto";
        }
    }

    const overlay = document.querySelector(".sideMenuOverlay")

    function toggleModalHandler(e) {
        toggleModal();
    }

    const selectedCity = document.querySelector(".burgerMenu");
    burgerMenu.addEventListener("click", function (e) {
        toggleModal();

        if (isModalOpen) {
            overlay.addEventListener("click", toggleModalHandler)
        } else {
            overlay.removeEventListener("click", toggleModalHandler)
        }
    });

    window.addEventListener("keydown", function (e) {
        if (e.keyCode === 27 && isModalOpen) {
            toggleModal();
        }
    })
}
