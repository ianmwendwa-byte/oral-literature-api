const mongoose =require('mongoose');


const TaskSchema =new mongoose.Schema({
    Subtopic:{
    type:String,
    required:[true,'Subtopic  is required'],
    trim:true,
    },
    Content:{
        type:String,
        required:[true,'Content is required'],
        trim:true,
        },

   
})
module.exports=mongoose.model('Riddles',TaskSchema)