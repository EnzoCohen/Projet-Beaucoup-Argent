import 'dotenv/config'

import { Router } from 'express'
import { userRepository } from './userRepository'
import { createValidator } from 'express-joi-validation'
import Joi from 'joi'
import {
  expressjwt,
  Request as JWTRequest,
} from 'express-jwt'

export const userController = Router()

const validator = createValidator()

userController.use(
  expressjwt({
    secret: process.env.JWT_SECRET!,
    algorithms: ['HS256'],
  }),
)

userController.get('/', async (req: JWTRequest, res) => {
  const role = req.auth?.role
  if (role == 'admin') {
    res.send(await userRepository.find())
  } else {
    res.sendStatus(403)
  }
})

const createUserSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().optional(),
})
userController.post(
  '/',
  validator.body(createUserSchema),
  async (req, res) => {
    try {
      res.send(
        await userRepository.save({
          login: req.body.login,
          password: req.body.password,
          role: req.body.role ?? 'user',
        }),
      )
    } catch (error: any) {
      res.status(400).send({
        error: error.message,
        detail: error.detail,
      })
    }
  },
)

const getUserSchema = Joi.object({
  id: Joi.number().required(),
})
userController.get(
  '/:id',
  validator.params(getUserSchema),
  async (req: JWTRequest, res) => {
    const id = Number(req.params.id)
    if (req.auth?.role === 'admin' || req.auth?.id === id) {
      res.send(
        await userRepository.findOneBy({
          id,
        }),
      )
    } else {
      res.sendStatus(403)
    }
  },
)
