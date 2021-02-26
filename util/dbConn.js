const mongoose = require("mongoose");
mongoose.connect("mongodb://shamshad:hussain786@cluster0-shard-00-00.lldq8.mongodb.net:27017,cluster0-shard-00-01.lldq8.mongodb.net:27017,cluster0-shard-00-02.lldq8.mongodb.net:27017/shop?ssl=true&replicaSet=atlas-uv21ba-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Database Connection Succesfull");
}).catch((err) => {
    console.log(err + " Database Not Connected");
})