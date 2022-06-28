const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/e-comm').then(() => {
    console.log("connected");
}).catch((error) => {
console.log("not Connected");
})   