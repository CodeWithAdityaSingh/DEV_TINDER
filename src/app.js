let express = require('express')

let app = express()


// app.post('/user',(req,res)=>{
   
//     res.send({Name : "Aditya Singh",Qualification : "Graduate"})
// })

app.get('/user',(req,res,next)=>{
    // console.log(req.query);
      next()
//    res.send('i am port 1000')

},
(req,res,next)=>{
    // res.send('Request 2')
    //   next()

})

// app.delete('/user',(req,res)=>{
//    res.send('Deleted Successfully')
// })

app.listen(1000,()=>{

       console.log('Listninig on Port 1000');
       
})
