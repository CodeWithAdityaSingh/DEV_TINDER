
let express = require('express')

let app = express()

const {auth} = require('./middleware/admin')

// app.post('/user',(req,res)=>{
   
//     res.send({Name : "Aditya Singh",Qualification : "Graduate"})
// })

// app.get('/user',(req,res,next)=>{
//     console.log("!!1");
//       next()
//    res.send('i am port 1000')

// },
// (req,res,next)=>{
//     // res.send('Request 2')
//      console.log("!!2");
//       next()

// },
// (req,res,next)=>{
//     // res.send('Request 2')
//      console.log("!!3");
//       next()

// },
// (req,res,next)=>{
//     res.send('Request 4')
//      console.log("!!4");
//     //   next()

// },)

// app.delete('/user',(req,res)=>{
//    res.send('Deleted Successfully')
// })


app.use('/admin',auth)



app.get('/admin/getAllData',(req,res,next)=>{
    next()
})

app.get('/admin/getAllData',(req,res)=>{
    res.send('GET ALL DATAA')
})

app.listen(1000,()=>{

       console.log('Listninig on Port 1000');
       
})
