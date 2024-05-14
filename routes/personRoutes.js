const express=require('express')
const router=express.Router()
const Person=require('../models/person')
router.post('/',async(req,res)=>{
  try {
    const data=req.body
    const newPerson=new Person(data)
    const response=await newPerson.save()
    console.log('data saved')
    res.status(200).json(response)
  } catch (error) {
     console.log(error) 
     req.status(500).json({error:'internal server error'})
  }
})
router.get('/',async(req,res)=>{
  try {
    const response=await Person.find()
    res.status(200).json(response)
  } catch (error) {
     console.log(error) 
     req.status(500).json({error:'internal server error'})
  }
})
module.exports=router