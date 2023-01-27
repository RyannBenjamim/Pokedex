// Themes
const themes = document.querySelector('.mode-btn')
const iconThemes = document.querySelector('.mode-btn i')
const root = document.querySelector(':root')
const meta = document.querySelector('#metaColor')

themes.addEventListener('click', function() {
    if (themes.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f2f2f2')
        root.style.setProperty('--bg-color2', '#fff')
        root.style.setProperty('--bg-color3', '#f2f2f2')
        root.style.setProperty('--modal-color', '#f2f2f2')
        root.style.setProperty('--modal-color2', '#fff')
        root.style.setProperty('--btn-text', '#fff')
        root.style.setProperty('--text-primary', '#000')
        root.style.setProperty('--text-secundary', '#black')
        themes.dataset.theme = 'light'
        iconThemes.setAttribute('class', 'fa-solid fa-sun')
        meta.setAttribute('content', '#fdfdfd')
    } else {
        root.style.setProperty('--bg-color', 'linear-gradient(90deg, rgba(23,50,89,1) 6%, rgba(16,38,69,1) 26%, rgba(14,33,60,1) 90%)')
        root.style.setProperty('--bg-color2', '#1d3457')
        root.style.setProperty('--bg-color3', '#172A46')
        root.style.setProperty('--modal-color', '#1d3457')
        root.style.setProperty('--modal-color2', '#172A46')
        root.style.setProperty('--text-primary', '#fdfdfd')
        root.style.setProperty('--text-secundary', '#ebe7e7')
        themes.dataset.theme ='dark'
        iconThemes.setAttribute('class', 'fa-solid fa-moon')
        meta.setAttribute('content', '#0F2441')
    }
})
