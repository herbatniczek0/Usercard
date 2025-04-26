const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Funkcja do odczytu liczby odwiedzin
function getVisitorCount() {
  try {
    const data = fs.readFileSync('visitorCount.json', 'utf8');
    return JSON.parse(data).count;
  } catch (err) {
    return 0;
  }
}

// Funkcja do zapisania liczby odwiedzin
function incrementVisitorCount() {
  const currentCount = getVisitorCount();
  const newCount = currentCount + 1;
  fs.writeFileSync('visitorCount.json', JSON.stringify({ count: newCount }, null, 2));
}

// Endpoint do pobrania liczby odwiedzin
app.get('/visitor-count', (req, res) => {
  res.json({ count: getVisitorCount() });
});

// Endpoint, który wywołuje incrementVisitorCount za każdym razem, gdy ktoś odwiedza stronę
app.get('/increment-visitor', (req, res) => {
  incrementVisitorCount();
  res.send('Visitor count incremented');
});

// Uruchomienie serwera
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
