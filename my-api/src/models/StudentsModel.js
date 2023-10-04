const mongoose= require('mongoose')
const DataSchema= mongoose.Schema({
    Name:{type:String},
    Roll:{type:String},
    Class:{type:String},
    Remarks:{type:String}
})

const StudentModel = mongoose.model('students',DataSchema)

module.exports = StudentModel;