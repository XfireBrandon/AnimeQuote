const container = document.querySelector('#container')


function getQuote() {
    $.get('https://animechan.vercel.app/api/random', logQuote)
}

function logQuote(quote) {
makeDiv(quote)
}

function makeDiv(obj) {
    const div = document.createElement('h2')
    div.classList.add('Anime')
    div.textContent = 'Anime Name: ' + obj.anime

    const characterDiv = document.createElement('h3')
    characterDiv.classList.add('Character')
    characterDiv.textContent =  'Character: ' + obj.character

    const quoteDiv = document.createElement('h4')
    quoteDiv.classList.add('Quote')
    quoteDiv.textContent = obj.quote
    

    appendDivToContainer(div)
    appendDivToContainer(characterDiv)
    appendDivToContainer(quoteDiv)
}

function appendDivToContainer(htmlNode) {
    container.appendChild(htmlNode)
}


const button = document.getElementById('btn')
button.addEventListener('click', function() {
    deleteQuote()
    getQuote()
})

function deleteQuote() {
    const hideQuote = document.getElementById('container')
    $(hideQuote).empty()
}
