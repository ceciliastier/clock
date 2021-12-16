// quote display variables
const quote = document.querySelector('.quote blockquote p');
const author = document.querySelector('.quote .author');
const refresh = document.querySelector('.refresh-btn');

// randm number generator
let random = Math.floor(Math.random() * 501);

//get quote
const getQuote = async () => {
    const response = await fetch("https://programming-quotes-api.herokuapp.com/Quotes");
    const data = await response.json();
    return data;
};
getQuote()
    .then(data => displayQuote(data))
    .catch(err => console.log(err));

function displayQuote(data){
    let randQuote = data[random].en;
    let randAuth = data[random].author;
    quote.innerText = "\"" + randQuote + "\"";
    author.innerText = randAuth;
    refresh.addEventListener('click', () => {
        random = Math.floor(Math.random() * 501);
        let randQuote = data[random].en;
        let randAuth = data[random].author;
        quote.innerText = "\"" + randQuote + "\"";
        author.innerText = randAuth;
    })

}