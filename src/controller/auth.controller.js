
  var user = require("../models/auth.models")
  //student registration post
  exports.register = async function(req, res){
   
    const password = req.body.password;
    //console.log('Data in Student Register Post:',req.body);
    if(req.body == null){
        res.respond({'message':'Error occured Please try Again'})
     // req.flash("Error",'Error occured Please try Again');
    }
    else{
      try {
        if (password != null) {

            user.newuser(req.body,(error,result)=>{
                console.log(result)
                if (error) {
                    res.json({'message':'Error occured Please try Again'})
                   
                } else {
                    const uname = req.body.username;
                    res.json({message:"SUCCEES"})
                   // req.("Success",`Welcome ${uname} to INTERNS-HUB!`);
                   
                }
            })
            
           
        } 
    }
    catch(error)
    {
      console.log(error);
    }
  }
}      

exports.login = async function(req, res){
  const emailid = req.body.emailid;
  const password = req.body.password;
  //console.log('Data in Student Register Post:',req.body);
  if(req.body == null){
      res.json({'message':'Error occured Please try Again'})
   // req.flash("Error",'Error occured Please try Again');
  }
  else{
    try {
      if (password != null) {

          user.login(req.body,(error,result)=>{
              if (error) {
                  res.send({'message':[error]})
                 
              } else {
                let uname
                result.forEach(data => {
                   uname =data.emailid;
                  console.log(uname)
                })
                res.result
                  res.send({message:"login SUCCEES with "+[uname]})
                 // req.("Success",`Welcome ${uname} to INTERNS-HUB!`);
                 
              }
          })
      } 
  }
  catch(error)
  {
    console.log(error);
  }
}
} 