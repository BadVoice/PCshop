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


        // if (modal.style.display = 'flex') {

        //     modalHide.addEventListener(('click'), (event) => {
        //         modal.style.display = 'none'
        //         if (event == modal) {
        //             modal__inner.forEach((element) => {
        //                     if (element === modal__inner) {
        //                         modal.style.display = 'none'
        //                     }
        //                 }

        //             )
        //         }
        //     })
        // }

    })