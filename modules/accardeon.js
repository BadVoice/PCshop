const accordeon = () => {
    const lineTitle = document.querySelector('.program-line__title');
    const lineDescrAll = document.querySelectorAll('.program-line__descr');
    const lineContent = document.querySelectorAll('.program-line__content')
    const lineDescr = document.querySelector('.program-line__descr');



    lineContent.forEach((elem, index) => {
        const lineDescr = elem.querySelector('.program-line__descr');
        const lineTitle = elem.querySelector('.program-line__title');

        lineTitle.addEventListener('click', () => {
            lineDescrAll.forEach((element) => {

                console.log(element === lineDescr)
                if (element === lineDescr) {

                    lineDescr.classList.add('active')

                } else {
                    element.classList.remove('active'), () => {}

                }

            })



        })

    })
}

accordeon()