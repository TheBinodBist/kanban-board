import  express  from 'express';
import { prisma } from "db/client";


const app = express();
app.post("signup",async(req,res)=>{
  prisma.user.create({
    
  })
})