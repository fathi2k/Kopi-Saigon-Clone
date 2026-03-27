import express from "express";
import cors from 'cors';
import fs from 'fs'
import { mongoConnect } from "./database/connection/mongoConnect.js";
import { dataKopi,dataUser } from "./database/model/mongoSchema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(cors())
const myPort = 3000;
dotenv.config();
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



app.post('/dataUser', async (req,res)=>{

  



    const {firstName,lastName,email,password,confirmPassword} = await req.body;


    

    const passwordHashed = await bcrypt.hash(password,11);  //hash password//

    const data = await  dataUser.create({
        firstName ,
        lastName,
        email,
        password : passwordHashed, //password hash simpan
        confirmPassword
    });
    

    
   res.json({message:'user Registered ✅'})



//     //bahagian file json//
//    const dataAsal = fs.readFileSync('./data/dataUser.json')
//    const dataJson = JSON.parse(dataAsal);
//    dataJson.push(rawDataUser);



//    //tulis baru dengan data baru//
//    fs.writeFileSync('./data/dataUser.json',JSON.stringify(dataJson,null,2))






   //send balik kat frontent
   
//    res.json({message:'Login Successfull ✅'})
})




///login///



app.post('/login', async (req,res)=>{

    const {email,password} =  req.body;

  
  //check dulu email sama ke tak//
    const user = await dataUser.findOne({email});
 if (!user) return res.json({ message: 'User not found' })
   
   
 //check password sama ke tak dengan password HASH user//
    const userSama = await bcrypt.compare(password,user.password)
    if (!userSama) return res.status(401).json({ message:'Wrong password' });


const token = jwt.sign(
    {id:user._id,email:user.email},
    process.env.JWT_SECRET,
    {expiresIn : '7d'}
)


    res.json({message:'berjaya Login ✅',token})






    
    

})


app.listen(myPort,()=>{
    console.log(`server port ${myPort} is running ✅`);
    
})




