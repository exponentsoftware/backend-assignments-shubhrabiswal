const express = require("express");
const router = express.Router();
const todo_controller = require("../controller/todo.controller")
;
router.post("/add", todo_controller.addTodo)
router.get("/getall", todo_controller.findallTodo);
router.get("/findbyid/:id", todo_controller.findbyId);
router.post("/deletebyid/:id", todo_controller.deletebyId);
router.post("/updatebyid/:id", todo_controller.updatebyId);



module.exports = router;