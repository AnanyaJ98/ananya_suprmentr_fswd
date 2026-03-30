let tasks = [];

const getAllTasks = () => tasks;

const getTaskById = (id) => tasks[id];

const createTask = (task) => {
    tasks.push(task);
    return task;
};

const updateTask = (id, updatedTask) => {
    tasks[id] = updatedTask;
    return tasks[id];
};

const deleteTask = (id) => {
    tasks.splice(id, 1);
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};