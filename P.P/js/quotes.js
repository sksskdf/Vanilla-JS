const quotes = [
    {
        quote:"You will face many defeats in life,but never let yourself be defeated.",
        author: "MAYA ANGELOU",
    },
    {
        quote:"Life is what happens when you're busy making other plans",
        author: "JOHN LENNON",
    },
    {
        quote:"Don't go around saying the world owes you a living. The world owes you nothing it was here first.",
        author: "MARK TWAIN",
    },
    {
        quote:"The way to get started is to quit talking and begin doing.",
        author: "WALT DISNEY",
    },
    {
        quote:"If you can't make it good,at least make it look good.",
        author: "BILL GATES",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
