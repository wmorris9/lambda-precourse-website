let dark = false

const changeTheme = () => {
    const root = document.documentElement
    const img = document.getElementById('icon')

    if (dark) {
        root.style.setProperty('--secondary', '#333')
        root.style.setProperty('--main', '#EEE')
        img.style.setProperty('filter', '')
        dark = false
    } else {
        root.style.setProperty('--secondary', '#EEE')
        root.style.setProperty('--main', '#333')
        img.style.setProperty('filter', 'invert()')
        dark = true
    }
}