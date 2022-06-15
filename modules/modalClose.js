const modalClose = () => {
    const div = document.querySelector('.modal__inner');
    const modal = document.querySelector('.modal')
    let closeItemModal = document.createElement('div')
    closeItemModal.innerHTML = 'X'
    div.prepend(closeItemModal)
    closeItemModal.style.cssText = `
        display: flex;
        justify-content: flex-end;
        font-size: 24px;
        cursor: pointer;
        width: 20px;
        `

    closeItemModal.addEventListener('click', () => {
        modal.style.display = '';
    })
}

modalClose()