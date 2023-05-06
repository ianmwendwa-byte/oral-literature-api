const Twister = require('../models/twister')


const getAllTwisters = async (req,res) => {
    try{
        const twisters=await Twister.find({})
        res
        .status(200)
        .json({twisters})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const createTwister = async (req,res)=>{
    try{
        const twister = await  Twister.create(req.body)
        res.status(201).json({twister})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}

const getTwister = async(req,res)=>{
    try{
        const {id:twisterID}=req.params
        const twister =await  Twister.findOne({_id:twisterID})
        if(!twister){
            return res.status(404).json({msg:`No narrative with id : ${twisterID}`})
        }
        res.status(200).json({twister})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}
const updateTwister = async (req,res)=>{
    try{
  const {id:twisterID}=req.params
  const twister =await Twister.findOneAndUpdate({_id:twisterID},req.body,{
    new:true,
     runValidators:true,
  })
  if(!twister){
    return res.status(404).json({msg:`No Oral Narrative with id : ${twisterID}`})
}
  res.status(200).json({twister})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const deleteTwister = async (req,res)=>{
   try{
    const {id:twisterID} =req.params
    const twister =await Twister.findOneAndDelete({_id:twisterID})
    if(!twister){
        return res.status(404).json({msg:`No task with id : ${twisterID}`})
    }
    res.status(200).send(`Twister ${twisterID} is successfully deleted`)
   }catch(error){
  res.status(500).json({msg:error})
   }
}
module.exports = {
    getAllTwisters,
    createTwister,
    getTwister,
    updateTwister,
    deleteTwister
}