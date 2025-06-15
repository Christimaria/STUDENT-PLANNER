const quotes = [
  "The future depends on what you do today. – Mahatma Gandhi",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "Success is the sum of small efforts repeated day in and day out. – Robert Collier",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Push yourself, because no one else is going to do it for you."
];

const quoteElement = document.getElementById("quote-text");

if (quoteElement) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
} else {
  console.error("Could not find element with id 'quote-text'");
}
