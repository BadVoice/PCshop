const lineTitle = document.querySelector('.program-line__title');
const lineDescrAll = document.querySelectorAll('.program-line__descr');
const lineContent = document.querySelectorAll('.program-line__content')
const lineDescr = document.querySelector('.program-line__descr');

// lineContent(() => {
//     lineTitle.addEventListener('click', () => {
//         lineDescr.classList.toggle('active')
//         console.dir(lineDescr)
//     })
//     lineDescr.classList.add('active')
// })


lineContent.forEach((elem, index) => {
    const lineDescr = elem.querySelector('.program-line__descr');
    const lineTitle = elem.querySelector('.program-line__title');

    lineTitle.addEventListener('click', () => {
        lineDescrAll.forEach((element) => {
            // const lineDescrAll = element.querySelectorAll('.program-line__descr');
            console.log(element === lineDescr)
            if (element === lineDescr) {
                // element.classList.toggle('active'), () => {
                lineDescr.classList.add('active')
                    // }
            } else {
                element.classList.remove('active'), () => {}

            }
            // else {
            //     lineDescr.classList.remove('active')

            // }
        })


        // console.dir(lineDescr);


        // if (lineDescr != 'active') {
        //     lineDescr.classList.add("non")

        // } else if (lineDescr == 'non') {
        //     lineDescr.classList.removed('active')
        // }

    })

})





// function rem() {
//     const lineDescr = document.querySelector('.program-line__descr');
//     if (lineDescr !== ('active')) {
//         lineDescr.classList.add("class")
//     }
// }

// console.dir(lineDescr)



// lineContent.forEach((element) => {
//     console.log(element)
// })