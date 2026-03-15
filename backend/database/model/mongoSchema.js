import mongoose from "mongoose";



//defined schema data//

//dataKopi//

const dataKopiSchema = new mongoose.Schema({
  id : String,
  name : String,
  price : String,
  type : String,
  images : String,
  category : String
})


//dataUser///


const dataUserSchema = new mongoose.Schema({
  username : String,
  password : String
})



//Create Model///



const dataKopi = mongoose.model('dataKopi',dataKopiSchema,'dataKopi');
const dataUser = mongoose.model('dataUser',dataUserSchema,'dataUser');



export {dataKopi,dataUser}