const Narrative =require('../models/narrative')


const getAllNarratives = async (req,res) => {
    try{
        const narrative=await Narrative.find({})
        res
        .status(200)
        .json({narrative})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const createNarrative = async (req,res)=>{
    try{
        const narrative = await  Narrative.create(req.body)
        res.status(201).json({narrative})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}

const getNarrative = async(req,res)=>{
    try{
        const {id:narrativeID}=req.params
        const narrative =await  Narrative.findOne({_id:narrativeID})
        if(!narrative){
            return res.status(404).json({msg:`No narrative with id : ${narrativeID}`})
        }
        res.status(200).json({narrative})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}
const updateNarrative = async (req,res)=>{
    try{
  const {id:narrativeID}=req.params
  const narrative =await Narrative.findOneAndUpdate({_id:narrativeID},req.body,{
    new:true,
     runValidators:true,
  })
  if(!narrative){
    return res.status(404).json({msg:`No Oral Narrative with id : ${narrativeID}`})
}
  res.status(200).json({narrative})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const deleteNarrative = async (req,res)=>{
   try{
    const {id:narrativeID} =req.params
    const narrative =await  Narrative.findOneAndDelete({_id:narrativeID})
    if(!narrative){
        return res.status(404).json({msg:`No task with id : ${narrativeID}`})
    }
    res.status(200).send(`Narrative ${narrativeID} is successfully deleted`)
   }catch(error){
  res.status(500).json({msg:error})
   }
}
module.exports = {
    getAllNarratives,
    createNarrative,
    getNarrative,
    updateNarrative,
    deleteNarrative
}