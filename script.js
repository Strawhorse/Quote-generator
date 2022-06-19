const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteButton = document.getElementById('new-quote')
const loader = document.getElementById('loader')


let apiQuotes = []

// create loading function and complete function
const loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
const complete = () => {
    loader.hidden = true;
    quoteContainer.hidden = false;
}



//Show new quote from online api
const newQuote = () => {
    loading();
    // Pick a random quote from apiQuotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    if (quote.author != null) {
        authorText.textContent = quote.author;
    } else {
        authorText.textContent = 'Unknown';
    }

    // Check the quote length and if long enable the long-quote class in the css file
    if (quote.text.length > 120 ) {
        // add a css class to the element in the DOM
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }

    // set quote and hide loader
    quoteText.textContent = quote.text;
    complete();
}

async function getQuotes () {
    loading();
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch (apiUrl);
        apiQuotes = await response.json();
        newQuote()
    } catch(err) {
        alert(error)
        // handle the error
    }
}

// Tweet a quote
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    // open twitter in a new tab or window
    window.open(twitterUrl, '_blank')

}

newQuoteButton.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)


//On load
getQuotes()





// to access local quotes from quotes.js
// const newQuote = () => {
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
//     console.log(quote);
// }
