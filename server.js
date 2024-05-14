const express=require('express')
const app =express()
const db=require('./db')
const bodyParser=require('body-parser')
app.use(bodyParser.json())

const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes)
app.get('/',function(req,res){
  res.send('welcome to my hotel .......')
})

app.listen(3000,()=>{
  console.log("listinening on port 3000")
})