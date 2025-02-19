import { Router } from "express";
import { userRepository } from "../user/userRepository";
import  jwt  from "jsonwebtoken";
import { Client } from "../client/clientEntity";
import { clientRepository } from "../client/clientRepository";
import { createHmac } from "node:crypto";

export const authController = Router()

authController.post('/login', async (req,res)=>{

    const Hashpassword = createHmac('sha256', process.env.SECRET_HASH!).update(req.body.password).digest('hex')
    const user = await userRepository.findOneBy({
        login: req.body.login,
        password: Hashpassword
    })
    if(user){
        const token = jwt.sign(
            {
                id: user.id,
                role: ''
            },
            process.env.JWT_SECRET!,
            {
              algorithm: 'HS256',
            },
        )
        res.send({token})
    }else {
        res.sendStatus(403)
    }
})


authController.post('/register', async (req,res)=>{
    try{
        const user = await userRepository.findOneBy({
            login : req.body.login
        })
    
        if(user){
            res.status(409).json({
                error:"Cette adresse e-mail est déjà liée à un compte"
            })
        }
        else{
            const Hashpassword = createHmac('sha256', process.env.SECRET_HASH!).update(req.body.password).digest('hex')
            const newUser:Client = {
                login: req.body.login,
                password:  Hashpassword
            }
            await clientRepository.save(newUser)
             res.status(201).json({ message: "Compte créé avec succès" })
        }
    }
    catch(error){
        console.error("Erreur lors de l'inscription :", error);
         res.status(500).json({ error: "Erreur interne du serveur" })
    }
    
})