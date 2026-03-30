const model = require('../models/taskModel');


exports.getTasks = (req, res) => {
    res.json(model.getAllTasks());
};


exports.getTask = (req, res) => {
    const task = model.getTaskById(req.params.id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
};


exports.createTask = (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Title required" });
    }

    const newTask = {
        id: Date.now(),
        title,
        description,
        status: "pending"
    };

    model.createTask(newTask);
    res.status(201).json(newTask);
};


exports.updateTask = (req, res) => {
    const id = req.params.id;
    const existing = model.getTaskById(id);

    if (!existing) {
        return res.status(404).json({ message: "Task not found" });
    }

    const updated = {
        ...existing,
        ...req.body
    };

    model.updateTask(id, updated);
    res.json(updated);
};


exports.deleteTask = (req, res) => {
    const id = req.params.id;

    if (!model.getTaskById(id)) {
        return res.status(404).json({ message: "Task not found" });
    }

    model.deleteTask(id);
    res.json({ message: "Task deleted" });
};