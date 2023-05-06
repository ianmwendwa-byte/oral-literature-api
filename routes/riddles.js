const express=require('express');
const router =express.Router(); 
const {getAllRiddles,createRiddle,getRiddle,updateRiddle,deleteRiddle}=require('../controllers/riddle')
 router.route('/').get(getAllRiddles).post(createRiddle);
 router.route('/:id').get(getRiddle).patch(updateRiddle).delete(deleteRiddle)
 module.exports=router 