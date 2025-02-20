import express from 'express'
import { AppDataSource } from './dataSource'
import { userController } from './modules/user/userController'
import cors from 'cors'
import { authController } from './modules/auth/authController'
import { technicienController } from './modules/technicien/technicienController'

const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Plop!')
})

app.use('/auth', authController)
app.use('/users', userController)
app.use('/technicien',technicienController)

const port = process.env.PORT
  ? Number(process.env.PORT)
  : 3000
AppDataSource.initialize().then(() => {
  app.listen(port, () => {
    console.log(
      `Server started at http://localhost:${port}`,
    )
  })
})
