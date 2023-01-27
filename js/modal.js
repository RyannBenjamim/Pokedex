// Modal
const moreBtn = document.querySelector('.more')
const btnModalClose = document.querySelector('.btnModalClose')
const modalBG = document.querySelector('.modalBG')
const modal = document.querySelector('.modal')
const clickAudio = document.querySelector('#click')

moreBtn.addEventListener('click', () => {
    clickAudio.play()
    modalBG.classList.remove('block')
    modal.classList.remove('block')
})

btnModalClose.addEventListener('click', () => {
    clickAudio.play()
    modalBG.classList.add('block')
    modal.classList.add('block')
})
