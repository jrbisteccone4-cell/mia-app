const express = require('express');
const app = express();
const path = require('path');

// Dice a Express di usare la cartella "public" per i file del sito
app.use(express.static(path.join(__dirname, 'public')));

// Imposta la porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});