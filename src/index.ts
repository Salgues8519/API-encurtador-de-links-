import 'dotenv/config'
import express, { Request, Response } from 'express'

const app =express()

app.use(express.json())

app.get('/',(req:Request, res:Response):any=>{
    return res.json('Tudo certo')
})

app.listen(process.env.PORT, ()=>{
    console.log('Servidor Inicializado');
    
})

// TDD -> Test Driven Development => Desemvolvimento Guiado por testes