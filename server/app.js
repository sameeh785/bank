let express = require('express')
let bodyParser = require('body-parser');
let User = require("./db/users");
let jwt=require('jsonwebtoken');
require("./db/config");
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.post("/signup", async (req, res) => {
    try{
       let newUser = new User({
           name :req.body.name,
           email : req.body.email,
           password : req.body.password,
           total : req.body.total
       })
       req.body.transaction.forEach((item) => {
           newUser.transaction.push(item);
           
       });
       await newUser.save();
       jwt.sign({
        name : newUser.name,
        id : newUser._id

       },"sami here",{
       expiresIn: '7d'
       },(err, token) => {
       res.json({
         token: token,
         user: newUser
        });
  
})
} 

    catch(e){
        res.send(500,{error : e.message})
    }
})
app.post('/login',async(req,res) =>{
    try {
   let user = await User.findOne({email : req.body.email , password : req.body.password})
   console.log(user)
   jwt.sign({
       name : user.name,
       id : user._id
   },"sami here",{
    expiresIn: '7d'
 },(err, token) => {
     res.json({
        token: token,
        user: user
    });

})
    } catch (error) {
        res.send(500,{error : e.message})
    }
  

})

app.post("/session", async (req, res) => {

    try{
    console.log("samiiiiiii")
       if(req.body.token){
       let data = jwt.verify(req.body.token, "sami here");
       let user = await User.findById(data.id);
       res.json(user);
       }

    }catch(e){
        
        res.send(500,{error : e.message})

    }

});

app.put('/deposit', async(req,res) =>{
    try{
    let respond = await User.findOneAndUpdate({_id : req.body.id},{transaction : req.body.newArrray , total : req.body.total},{new:true})
    console.log(respond)
    res.json(respond)

    }
    catch(e){
        res.send(500,{error : e.message})
    }
})
app.put('/withdraw', async(req,res) =>{
    try{

        let respond = await User.findOneAndUpdate({_id : req.body.id},{transaction : req.body.newArrray, total : req.body.total},{new:true})
        res.json(respond)

    }
    catch(e){
        res.send(500,{error : e.message})
    }
})

app.put('/deleteTransaction',async(req,res) =>{
    try{
        let respond = await User.findOneAndUpdate({_id : req.body.id},{transaction : req.body.newArrray, total : req.body.total},{new:true})
        res.json(respond)
    }
    catch(e){
        res.send(500,{error : e.message})
    }
})

app.listen(process.env.PORT || 8080, function () {
    console.log("Start starting");
})