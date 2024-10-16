const url = `http://numbersapi.com/random/math?json`;

async function download() {
    const element = document.querySelector('.number')
    element.innerHTML = '<h1 class="wb">Tere tulemast! </h1>'
    for (let i = 0; i < 20; i++) {
        const response = await fetch(url)
        const json = await response.json()
        const number = json.number
        const text = json.text
        element.innerHTML += "<p class='box'>" + number + " : <br> <br> " + text + "</p>"
    }
}
download();