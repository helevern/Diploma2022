window.onload = function () {
    const modalContainer = document.querySelector(".moduleContainer");
    const OPEN_MODAL_CLASSNAME = "openModal";

    let isModalOpen = false;

    function toggleModal () {
        modalContainer.classList.toggle(OPEN_MODAL_CLASSNAME);
        isModalOpen = !isModalOpen;
        if (isModalOpen){
            document.body.style.overflow = "hidden";
            modalContainer.focus();
        } else {
            document.body.style.overflow = "auto";
        }
    }

    const overlay = document.querySelector(".overlay")

    function toggleModalHandler(e) {
        toggleModal();
    }



    const selectedCity = document.querySelector(".SelectedCity");
    selectedCity.addEventListener("click", function (e) {
        toggleModal();

        if (isModalOpen) {
            overlay.addEventListener("click", toggleModalHandler)
        } else {
            overlay.removeEventListener("click", toggleModalHandler)
        }
    });

    const closeModalButton = document.querySelector(".closeButton");
    closeModalButton.addEventListener("click", toggleModalHandler)

    window.addEventListener("keydown", function (e) {
        if (e.keyCode === 27 && isModalOpen) {
            toggleModal();
        }
    })

}