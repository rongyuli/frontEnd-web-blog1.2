window.onload = () => {
    var sections = document.querySelectorAll('section')
    var main = document.querySelector('main')
    for (var item of sections) {
        item.addEventListener('mouseover', () => {
            main.style.background = 'rgb(235,235,235)'
        })
        item.addEventListener('mouseleave', () => {
            main.style.background = 'rgb(247,247,247)'
        })
    }
}
