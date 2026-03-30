const express = require('express');
const router = express.Router();

let tasks = [];

router.get('/', (req, res) => {
    res.json(tasks);
});

router.get('/:id', (req, res) => {
    const task = tasks[req.params.id];
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
});

router.post('/', (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }

    const newTask = {
        id: tasks.length,
        title,
        description,
        status: "pending"
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;

    if (!tasks[id]) {
        return res.status(404).json({ message: "Task not found" });
    }

    const { title, description, status } = req.body;

    tasks[id] = {
        id,
        title: title || tasks[id].title,
        description: description || tasks[id].description,
        status: status || tasks[id].status
    };

    res.json(tasks[id]);
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;

    if (!tasks[id]) {
        return res.status(404).json({ message: "Task not found" });
    }

    tasks.splice(id, 1);
    res.json({ message: "Task deleted" });
});

module.exports = router;