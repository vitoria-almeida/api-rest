import express from 'express'
import { StatusCodes } from 'http-status-codes'

const app = express()
const PORT = process.env.PORT || 3000

let users = [
    {
        id: 1,
        name: 'Vitoria',
        age: 22
    },
    {
        id: 2,
        name: 'Vitor',
        age: 20
    }
]

app.use(express.json()) //middleware para definir que todos os requests serão enviados em formato JSON

//Necessário para rodar o servidor em uma porta
app.listen(PORT, () => {
    console.log(`rodando em http://localhost:${PORT}`)
})

//ROTAS
app.get('/', (req, res) => {
    return res.send('<h1>Início</h1>')
})
 
//rota/endpoint para retornar os usuários
app.get('/users', (req, res) => {
    return res.send(users)
})

//rota/endpoint para retornar um usuário específico
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId
    const user = users.find(user => {
        return (user.id === Number(userId))
    })
    return res.send(user)
})

//endpoint para criar um novo usuário e retorná-lo
app.post('/users', (req, res) => {
    const newUser = req.body

    users.push(newUser)
    
    return res.status(StatusCodes.CREATED).send(newUser)
})

//endpoint para atualizar um objeto
app.put('/users/:userId', (req, res) => {
    const userId = req.params.userId
    const updatedUser = req.body

    users = users.map(user => {
        if (Number(userId) === user.id) {
            return updatedUser
        }
        return user
    })
    return res.send(updatedUser)
})

//endpoint para deletar um objeto
app.delete('/users/:userId', (req, res) => {
    const userId = req.params.userId
    
    users = users.filter((user) => {
        return (user.id !== Number(userId))
    })

    return res.status(StatusCodes.NO_CONTENT).send()
})