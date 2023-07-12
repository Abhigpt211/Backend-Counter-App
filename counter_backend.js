const express = require ('express')
const app = express()

let counter = 0

app.get('/', (req,res)=>{
    res.json({counter:counter})
})

app.get('/increment', (req,res)=>{
    counter++
    res.json({counter:counter})
})

app.get('/decrement', (req,res)=>{
    counter--
    res.json({counter:counter})
})

app.listen(3010, () => {
    console.log('Server is running on port 3010');
  });