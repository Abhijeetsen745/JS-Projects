const api_url = "https://api.quotable.io/random";
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')

async function getNewQuote(url){
  const response = await fetch(url)
  var data = await response.json();
  
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

// getNewQuote(api_url);