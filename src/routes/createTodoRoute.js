const TodoModel = require('../models/TodoModel');
const transporter = require("../mail.js")

module.exports = async (req, res) => {
  const {text} = req.body;
  const todo = new TodoModel({
    text,
    completed: false,
    status : "completed",
  });
  const newTodo = await todo.save();
  res.json(newTodo);
};

