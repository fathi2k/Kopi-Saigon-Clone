import express from "express";
import cors from 'cors';
import fs from 'fs'
import { mongoConnect } from "./database/connection/mongoConnect.js";
import { dataKopi,dataUser } from "./database/model/mongoSchema.js";
const app = express();
app.use(express.json());
app.use(cors())
const myPort = 3000;

//connect mongo db //


mongoConnect();



app.get('/',(req,res)=>{
    res.send('Main menu')
})



//import data dari json kepada mongodb//

//data kopi
app.get('/importJsonKopi',async (req,res)=>{
     
    const rawData = fs.readFileSync('./data/dataKopi.json');
    const jsonData = JSON.parse(rawData);


await dataKopi.insertMany(jsonData)
 res.json({ message: "Data imported to MongoDB ✅" });

})


//data user//

app.get('/importJsonUser',(req,res)=>{
        const raw = fs.readFileSync('./data/dataUser.json');
        const data = JSON.parse(raw)

      
        dataUser.insertMany(data) //transfer to mongo//
        res.json({message:'sdsd'}) //testing
        
})


// ---------------DISPLAY------------------------///


// Data Kopi

app.get('/dataCoffee',async (req,res)=>{

const dataCofee = await dataKopi.find();
res.json(dataCofee)

})


//Data User

app.get('/dataUser', async (req,res)=>{
    const data =  await dataUser.find();
    res.json(data)
})



//tangkap data dari frontend///



app.post('/dataUser',(req,res)=>{
    const rawDataUser = req.body;
   

    //bahagian file json//
   const dataAsal = fs.readFileSync('./data/dataUser.json')
   const dataJson = JSON.parse(dataAsal);
   dataJson.push(rawDataUser);

   //tulis baru dengan data baru//
   fs.writeFileSync('./data/dataUser.json',JSON.stringify(dataJson,null,2))

   //send balik kat frontent
   
   res.json({message:'Login Successfull ✅'})
})


app.listen(myPort,()=>{
    console.log(`server port ${myPort} is running ✅`);
    
})




