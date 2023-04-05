const express = require("express");
const router = express.Router();
const Todo = require("../models/todoSchema");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/todo", async (req, res) => {
  console.log(req.body); 
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    created: req.body.created,
  });

  try {
    console.log(todo);
    const savedTodo = await todo.save();
    // res.json(savedTodo);
    res.status(200).json({ message: "Todo added successfully" });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:todoId", async (req, res) => {
  try {
    
    const todo = await Todo.findById(req.params.todoId);
    res.json(todo);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:todoId", async (req, res) => {
  try {
    const removedTodo = await Todo.remove({ _id: req.params.todoId });
    res.json(removedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:todoId", async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      { _id: req.params.todoId },
      { $set: { completed: req.body.completed } }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
