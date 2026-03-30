const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bookRoutes = require('./routes/books');
const authorRoutes = require('./routes/authors');

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

app.use(express.static('public'));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});