const express=require('express');
const StudentsController = require("../controllers/StudentsController");

const router=  express.Router();

router.post('/InsertStudent',StudentsController.InsertStudent)


module.exports=router;