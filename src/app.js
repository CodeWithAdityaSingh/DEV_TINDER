let express = require('express')

let app = express()



app.use('/test',(req,res)=>{
    res.send('Hellow this is port 1000')
})


app.listen(1000,()=>{

       console.log('Listning on Port 1000');
       
})