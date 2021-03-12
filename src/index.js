const express= require("express");
const cors= require("cors");

const messageRouter=require("./routers/messageRouter")
const port= process.env.PORT;
const sequelize= require('./db/sequelize')

const app= express();

app.use(express.json());
app.use(cors());
app.use(messageRouter);

app.use("/",(req,res)=>{
    res.send("ok")
})

sequelize.sync()
    .then(() => app.listen(port, () => console.log("Server connectes, port:", port)))
    .catch(err => console.log(err));