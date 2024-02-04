const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeAtiveClassess()
        panel.classList.add('active')
    })
})

function removeAtiveClassess() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}