
let btnn = document.getElementById('btnn');

window.onscroll = function () {
    if (scrollY >= 400) {
        btnn.style.display = 'block';
    } else {
        btnn.style.display = 'none';
    }
}
btnn.onclick = function () {
    scroll({
        right: 0,
        top: 0,
        behavior: "smooth"
    })
}