const todo = require('../models/todoModel');

exports.getTodo = async (req, res) => {
  try {
    const response = await todo.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving todos' });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const TaskData = await todo.findById(req.params.id);
    if (!TaskData) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(TaskData);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving task' });
  }
};

exports.postTodo = async (req, res) => {
  const { task, status } = req.body;
  try {
    const exist = await todo.findOne({ task });
    if (exist) {
      return res.status(400).json({ message: 'Task already exists' });
    }
    const newTask = new todo({ task, status });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' });
  }
};

exports.putTodo = async (req, res) => {
  const { task, status } = req.body;
  try {
    const update = await todo.findByIdAndUpdate(
      req.params.id,
      { task, status },
      { new: true }
    );
    if (!update) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task' });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deleteTask = await todo.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task' });
  }
};
