const Poetry =require('../models/poetry')


const getAllPoetry = async (req,res) => {
    try{
        const poetry=await Poetry.find({})
        res
        .status(200)
        .json({poetry})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const createPoetry = async (req,res)=>{
    try{
        const poetry = await  Poetry.create(req.body)
        res.status(201).json({poetry})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}

const getPoetry = async(req,res)=>{
    try{
        const {id:poetryID}=req.params
        const poetry =await  Poetry.findOne({_id:poetryID})
        if(!poetry){
            return res.status(404).json({msg:`No Poetry with id : ${poetryID}`})
        }
        res.status(200).json({poetry})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}
const updatePoetry = async (req,res)=>{
    try{
  const {id:poetryID}=req.params
  const poetry =await Poetry.findOneAndUpdate({_id:poetryID},req.body,{
    new:true,
     runValidators:true,
  })
  if(!poetry){
    return res.status(404).json({msg:`No Oral Poetry with id : ${poetryID}`})
}
  res.status(200).json({poetry})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const deletePoetry = async (req,res)=>{
   try{
    const {id:poetryID} =req.params
    const poetry =await  Poetry.findOneAndDelete({_id:poetryID})
    if(!poetry){
        return res.status(404).json({msg:`No task with id : ${poetryID}`})
    }
    res.status(200).send(`Poetry ${poetryID} is successfully deleted`)
   }catch(error){
  res.status(500).json({msg:error})
   }
}
module.exports = {
    getAllPoetry,
    createPoetry,
    getPoetry,
    updatePoetry,
    deletePoetry
}