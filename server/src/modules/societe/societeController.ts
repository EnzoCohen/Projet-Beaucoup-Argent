import { Router } from "express";
import { societeRepository } from "./societeRepository";

export const societeController = Router()


societeController.get('/', async (req,res)=>{
    try{
       res.send( await societeRepository.find())

    }catch(error){
        console.log(error)
        res.status(404).json({error:"aucune société"})
    }
})