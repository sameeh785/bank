let mongoose = require('mongoose');
let userSchema = mongoose.Schema({
   
    name : String,
    email : String,
    password : String,
    total : String,
    
    transaction : [
        {
            number : Number,
            type : String,
            money : String,
            time : String
        }
    ]

        
    
},
{ typeKey: '$type' }
)

module.exports = mongoose.model('user',userSchema);