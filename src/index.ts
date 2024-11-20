import 'dotenv/config'
import express, { Request, Response } from 'express'
import rotas from './rotas'

const app =express()

app.use(express.json())

app.use(rotas)

app.listen(process.env.PORT, ()=>{
    console.log('Servidor Inicializado');
    
})

// TDD -> Test Driven Development => Desemvolvimento Guiado por testes