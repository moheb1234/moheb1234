let color = 'light'
function change_bg() {
    if (color === 'light') {
        document.body.style.background = "#101111"
        color = 'dark'
    } else {
        document.body.style.background = "#ffffff"
        color = 'light'
    }
}

w3.slideshow('.slide',700)