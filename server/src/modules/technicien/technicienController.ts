import { Router } from "express";
import { technicienRepository } from "./technicienRepository";
import { ILike } from "typeorm";

export const technicienController = Router()

technicienController.get('/', async (req, res)=>{
    try{
        res.send(await technicienRepository.find())
    }catch(error){
        console.log(error)
        res.status(404)
    }
})


technicienController.get('/:competence', async (req,res)=>{
    try{
        res.send(await technicienRepository.findBy({
            competence: ILike(req.params.competence)
        }))
    }
    catch(error){
        console.log(error)
        res.status(404)
    }
})