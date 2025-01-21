import { Router } from 'express'
import { userRepository } from '../user/userRepository'
import { createValidator } from 'express-joi-validation'
import Joi from 'joi'
import jwt from 'jsonwebtoken'

export const authController = Router()
const validator = createValidator()

const loginSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
})

authController.post(
  '/login',
  validator.body(loginSchema),
  async (req, res) => {
    const user = await userRepository.findOneBy({
      login: req.body.login,
      password: req.body.password,
    })
    if (user) {
      const token = jwt.sign(
        {
          id: user.id,
          role: user.role,
        },
        process.env.JWT_SECRET!,
        {
          algorithm: 'HS256',
        },
      )
      res.send({
        token,
      })
    } else {
      res.sendStatus(401)
    }
  },
)
