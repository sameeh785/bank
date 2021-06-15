let mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/myapp", (err) => {

    if (!err) {
        console.log('db connected haa')
    } else {
        console.log(err);
    }

})