async function getQuote() {
  let response = await fetch("https://dummyjson.com/quotes/random");
  let data = await response.json();
  return data;
}

let newQuote = document.getElementById("new-quote");
let quote = document.getElementById("quote");
let author = document.getElementById("author");
newQuote.addEventListener("click", () => {
  getQuote().then((result) => {
    quote.textContent = `"${result.quote}"`;
    author.textContent = `--${result.author}`;
  });
});

let copy = document.getElementById("copy");
copy.addEventListener("click", () => {
  copy.textContent = "Copied!";
  navigator.clipboard.writeText(quote.textContent);
  setTimeout(() => (copy.textContent = "Copy"), 3000);
});

let tweet = document.getElementById("tweet");
tweet.addEventListener("click", () => {
  let q = encodeURIComponent(quote.textContent);
  let a = encodeURIComponent(author.textContent);
  console.log(q, a);
  let url = `https://twitter.com/intent/tweet?text=${q}${a}`;
  window.open(url, "_blank");
});
