//Get quotes from api - use asynchronous fetch

let apiQuotes = []

//Show new quote from online api
const newQuote = () => {
    // Pick a random quote from apiQuotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote);
}

// to access local quotes from quotes.js
// const newQuote = () => {
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
//     console.log(quote);
// }

async function getQuotes () {
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



//On load
getQuotes()