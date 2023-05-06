const Proverbs =require('../models/proverbs')


const getAllProverbs = async (req,res) => {
    try{
        const proverb=await Proverbs.find({})
        res
        .status(200)
        .json({proverb})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const createProverb = async (req,res)=>{
    try{
        const proverb = await  Proverbs.create(req.body)
        res.status(201).json({proverb})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}

const getProverb = async(req,res)=>{
    try{
        const {id:proverbID}=req.params
        const proverb =await  Proverbs.findOne({_id:proverbID})
        if(!proverb){
            return res.status(404).json({msg:`No Proverb with id : ${proverbID}`})
        }
        res.status(200).json({proverb})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}
const updateProverb = async (req,res)=>{
    try{
  const {id:proverbID}=req.params
  const proverb =await Proverbs.findOneAndUpdate({_id:proverbID},req.body,{
    new:true,
     runValidators:true,
  })
  if(!Proverb){
    return res.status(404).json({msg:`No  Proverb with id : ${proverbID}`})
}
  res.status(200).json({proverb})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const deleteProverb = async (req,res)=>{
   try{
    const {id:proverbID} =req.params
    const proverb =await  Proverbs.findOneAndDelete({_id:ProverbID})
    if(!proverb){
        return res.status(404).json({msg:`No proverb with id : ${proverbID}`})
    }
    res.status(200).send(`Proverb ${proverbID} is successfully deleted`)
   }catch(error){
  res.status(500).json({msg:error})
   }
}
module.exports = {
    getAllProverbs,
    createProverb,
    getProverb,
    updateProverb,
    deleteProverb
}