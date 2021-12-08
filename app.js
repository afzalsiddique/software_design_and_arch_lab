const express = require('express')
const app = express()

app.get('/', (req,res)=>{
  res.send("Welcome azure")
})

app.listen(8000,()=>{
  console.log('server is running in port 8000')
})