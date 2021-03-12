const express= require('express')
const Message= require('../models/messageModel')
const router= new express.Router();

router.post('/messages/new', async(req,res)=>{
    try{
        const message= await Message.create(req.body)
        res.send(message)
    }catch(err){
        res.status(400).send({
            status:400, message: err.message,
        });
    }
});
router.get('/messages/getall', async(req,res)=>{
    try{
        const messages= await Message.findAll()
        if(!messages){ res.send([])}
        res.send(messages)
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports=router;