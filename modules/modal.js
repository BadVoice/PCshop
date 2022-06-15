const modal = () => {
    const modalBtn = document.querySelector('.modal__button')
    const modal = document.querySelector('.modal')
    const modalHide = document.querySelector('.modal__inner')

    modalBtn.addEventListener(('click'), () => {
        modal.style.display = 'flex';
    })


    modal.addEventListener(('click'), (event) => {
        const modalContent = event.target.closest('.modal__inner')

        if (!modalContent) {
            modal.style.display = '';
        }


    })
}
modal()