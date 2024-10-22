 let auth = (req,res,next)=>{
  
    let data = 44;

    let authentication = data === 44;

    !authentication ? res.status(400).send('error') : next()
  
}


module.exports = {auth}

