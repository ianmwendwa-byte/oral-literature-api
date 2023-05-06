const Riddle =require('../models/riddle')


const getAllRiddles = async (req,res) => {
    try{
        const riddle=await Riddle.find({})
        res
        .status(200)
        .json({riddle})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const createRiddle = async (req,res)=>{
    try{
        const riddle = await  Riddle.create(req.body)
        res.status(201).json({riddle})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}

const getRiddle = async(req,res)=>{
    try{
        const {id:riddleID}=req.params
        const riddle =await  Riddle.findOne({_id:riddleID})
        if(!riddle){
            return res.status(404).json({msg:`No Riddle with id : ${riddleID}`})
        }
        res.status(200).json({riddle})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}
const updateRiddle = async (req,res)=>{
    try{
  const {id:riddleID}=req.params
  const riddle =await Riddle.findOneAndUpdate({_id:RiddleID},req.body,{
    new:true,
     runValidators:true,
  })
  if(!riddle){
    return res.status(404).json({msg:`No Oral Riddle with id : ${riddleID}`})
}
  res.status(200).json({riddle})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const deleteRiddle = async (req,res)=>{
   try{
    const {id:riddleID} =req.params
    const riddle =await  Riddle.findOneAndDelete({_id:RiddleID})
    if(!riddle){
        return res.status(404).json({msg:`No task with id : ${riddleID}`})
    }
    res.status(200).send(`Riddle ${riddleID} is successfully deleted`)
   }catch(error){
  res.status(500).json({msg:error})
   }
}
module.exports = {
    getAllRiddles,
    createRiddle,
    getRiddle,
    updateRiddle,
    deleteRiddle
}