const express = require("express");
const router = express.Router();
const Todo = require("../models/todoSchema");
const ObjectId = require("mongoose").Types.ObjectId;
const { requireSignin } = require("../middleware/index");

router.get("/get/:id", requireSignin, async (req, res) => {
  console.log(req.body);
  try {
    let userId = req.params.id;
    console.log(userId);
    const todos = await Todo.findOne({ userId: new ObjectId(userId) });

    res.json(todos);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/todo/:id", requireSignin, async (req, res) => {
  console.log(req.body);
  const { user } = req;

  let userId = req.params.id;
  const todo = new Todo({
    userId: userId,
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
