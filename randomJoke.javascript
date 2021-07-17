let jokeTextEl = document.getElementById('jokeText')
let jokeBtnEl = document.getElementById('jokeBtn')
let loadingEl = document.getElementById("loading")

function jokebtn() {

    let url = "https://apis.ccbp.in/jokes/random"
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {

            let randomJoke = jsonData.value

            jokeTextEl.textContent = randomJoke
        })
}


jokeBtnEl.addEventListener("click", jokebtn)
