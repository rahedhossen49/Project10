const StudentsModel=require('../models/StudentsModel')

// C=Create
exports.InsertStudent=async(req,res)=> {

    let reqBody = req.body
   try{

       const data = await StudentsModel.create(reqBody)
       res.status(200).json({  status:"success",data:data})

   }catch (err){
    res.status(404).json({status:"fail",data:err})
   }
}