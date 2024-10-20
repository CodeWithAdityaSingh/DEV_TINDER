let express = require('express')

let app = express()




app.post('/user',(req,res)=>{
    res.send({Name : "Aditya Singh",Qualification : "Graduate"})
})

app.get('/user',(req,res)=>{
   res.send('i am port 1000')

})

app.delete('/user',(req,res)=>{
   res.send('Deleted Successfully')
})

app.listen(1000,()=>{

       console.log('Listninig on Port 1000');
       
})
