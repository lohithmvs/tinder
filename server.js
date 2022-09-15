import express from 'express';
import mongoose from 'mongoose';
import Cards from "./dbcards.js"
import cors from "cors";

// app config
const app=express();
const port=process.env.PORT || 8001;
const connection_url='mongodb+srv://admin:Z8duf9omwE2A2Wzz@cluster0.gl0ag8c.mongodb.net/?retryWrites=true&w=majority';

//middlewares
app.use(express.json());
app.use(cors());

//DB config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,

},(err) => {
    if(!err){
        console.log("connected to db");
    }
    else{
        console.log("error");
    }
})

// const cardSchema=({
//     name: String,
//     url: String
// })

// const monmodel=mongoose.model("Cards",cardSchema);

//API Endpoints
app.get('/',(req,res)=> res.status(200).send("server is up and running!"));
app.post('/tinder/cards',async(req,res) =>{
    const dbCard=req.body;
    // console.log("inside post functon");
    // const dbCard =new monmodel({
    //     name:req.body.name,
    //     url:req.body.url
    // });
    // console.log("hlo");

    // const val=await dbCard.save();
    // res.json(val);

    Cards.create(dbCard,(err, data) =>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})
app.get('/tinder/cards' ,(req,res) => {
    Cards.find((err,data) => {
        if(err) {
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});
//Listner
app.listen(port,() => console.log('listening in localhost:'));