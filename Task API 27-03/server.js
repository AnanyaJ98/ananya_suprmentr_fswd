const express = require('express');
const app = express();

app.use(express.json()); 

const taskRoutes = require('./routes/tasks');

app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send("Task API is running");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});