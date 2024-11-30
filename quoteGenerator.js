let btn = document.querySelector('button');
let quote = document.querySelector('p');
let auther = document.querySelector('h2');

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = `"${quotes[random].quote}"`;
    auther.textContent = quotes[random].author;
});

let quotes = [
    {
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author: ' Confucius'
    },
    {
        quote: 'The way to get started is to quit talking and begin doing.',
        author: 'William Shakespeare'
    },
    {
        quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
        author: 'Mark Twain'
    },
    {
        quote: 'If you want to build a ship, don\'t drum up people to collect wood and don\'t send them to collect wood; that\'s the old way of building ships.',
        author: 'Friedrich Nietzsche'
    },
    {
        quote: 'The only way to do great work is to love what you do.',
        author: 'Warren Buffett'
    },
    {
        quote: 'It is our choices, Harry, that show what we truly are, far more than our abilities.',
        author: 'Alfred Hitchcock'
    },
    {
        quote: 'The important thing is not to stop questioning. Curiosity has its own reason for existing.',
        author: 'Benjamin Franklin'
    },
    {
        quote: 'The only way to do great work is to love what you do.',
        author: 'Alfred Hitchcock'
    }
];

