const express = require('express');
const router = express.Router();

let books = [];

router.get('/', (req, res) => {
    res.json(books);
});

router.get('/:id', (req, res) => {
    const book = books[req.params.id];
    res.json(book);
});

router.post('/', (req, res) => {
    const { title, author } = req.body;
    books.push({ title, author });
    res.send("Book added");
});

router.put('/:id', (req, res) => {
    books[req.params.id] = req.body;
    res.send("Book updated");
});

router.delete('/:id', (req, res) => {
    books.splice(req.params.id, 1);
    res.send("Book deleted");
});

module.exports = router;