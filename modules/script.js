const lineTitle = document.querySelector('.program-line__title');
const lineDescr = document.querySelector('.program-line__descr');

console.dir(lineTitle)

lineTitle.addEventListener('click', () => {
    lineDescr.classList.add('active')
    console.dir(lineDescr)
})


// for (let i = 0; i < length.lineDescr; i++) {
//     console.dir(i)
// }