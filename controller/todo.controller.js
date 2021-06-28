const Todo = require("../models/todo");

////////////////////// API to add to the todo list//////////////////////
exports.addTodo = async (req, res) => {
    res.send(req.body.task)

    const taskToDo = new Todo({
        user_name: req.body.user_name,
        task:req.body.task,
        category:req.body.category,
        done: req.body.done
    })

    try{
        await taskToDo.save();
        res.send(taskToDo)
    }catch(err){
        res.send(err)
    }
  }


////////////////////// API to get all the tasks of the todo list//////////////////////
exports.findallTodo = async (req,res) => {
    await Todo.find()
    .then((taskToDo) => {res.send(taskToDo);})
    .catch((err) => console.log(err))
}


////////////////////// API to get task by id //////////////////////
exports.findbyId = async (req,res) => {
    const id = req.params.id
    console.log(id)
    await Todo.findById({_id:id})
    .then((taskToDo) => {res.send(taskToDo);})
    .catch((err) => console.log(err))
}


////////////////////// API to add to delete todo list by id//////////////////////
exports.deletebyId = async (req,res) => {
    const id = req.params.id
    await Todo.findByIdAndRemove({_id:id})
    .then((result) => res.send("deleted"))
    .catch((err) => console.log(err))
}


////////////////////// API to add to update the todo list by id//////////////////////
exports.updatebyId = async (req,res) => {
    const id = req.params.id;
    await Todo.findByIdAndUpdate(id,req.body)
    .then((result) => res.status(200).json(id + "   updated"))
    .catch((err) => console.log(err))
}