const express = require("express");
const router = express.Router();
const Task = require("../model/tasks");

// Get all tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific task
router.get("/:id", getTask, (req, res) => {
    res.json(res.task);
});

// Create a new task
router.post("/", async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

async function getTask(req, res, next) {
    try {
        const task = await Task.findById(req.params.id);
        if (task == null) {
            return res.status(404).json({ message: "Cannot find task" });
        }
        res.task = task;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = router;