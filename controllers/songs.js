const Songs =require('../models/songs')


const getAllSongs = async (req,res) => {
    try{
        const songs=await Songs.find({})
        res
        .status(200)
        .json({songs})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const createSong = async (req,res)=>{
    try{
        const song = await  Songs.create(req.body)
        res.status(201).json({song})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}

const getSong = async(req,res)=>{
    try{
        const {id:songID}=req.params
        const song =await  Songs.findOne({_id:songID})
        if(!song){
            return res.status(404).json({msg:`No Songs with id : ${songID}`})
        }
        res.status(200).json({song})
    }catch(error){
        res.status(500).json({msg:error})
    }
    
}
const updateSong = async (req,res)=>{
    try{
  const {id:songID}=req.params
  const song =await Songs.findOneAndUpdate({_id:SongsID},req.body,{
    new:true,
     runValidators:true,
  })
  if(!song){
    return res.status(404).json({msg:`No Oral Songs with id : ${songID}`})
}
  res.status(200).json({song})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const deleteSong = async (req,res)=>{
   try{
    const {id:songID} =req.params
    const song =await  Songs.findOneAndDelete({_id:songID})
    if(!song){
        return res.status(404).json({msg:`No task with id : ${songID}`})
    }
    res.status(200).send(`Songs ${songID} is successfully deleted`)
   }catch(error){
  res.status(500).json({msg:error})
   }
}
module.exports = {
    getAllSongs,
    createSong,
    getSong,
    updateSong,
    deleteSong
}