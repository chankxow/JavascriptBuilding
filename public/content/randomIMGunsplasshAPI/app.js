const container = document.querySelector('.container')
const rows = 4
const col = 3

function randomNumber() {
    return Math.floor(Math.random() * 500)
}

for (let i = 0; i < rows * col; i++) {
    const url = `https://source.unsplash.com/random/${randomNumber()}`

    const ImgEl = document.createElement('img')
    ImgEl.src=url
    container.appendChild(ImgEl)


}