import mongoose, { mongo } from "mongoose";





export const mongoConnect = async ()=>{

  try {
     await mongoose.connect('mongodb://127.0.0.1:27017/kopiSaigon')
     console.log('Mongoose already connected ✅');
     
  } catch (error) {
    console.log(error);
    
  }
   

}



