const express = require('express');
const app = express();

// Existing routes
app.get('/qr', (req, res) => {
    // qr route logic
});

app.get('/code', (req, res) => {
    // code route logic
});

app.get('/pair', (req, res) => {
    // pair route logic
});

app.get('/', (req, res) => {
    res.send('Home');
});

// New bot route
app.get('/bot', (req, res) => {
    // bot route logic
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});