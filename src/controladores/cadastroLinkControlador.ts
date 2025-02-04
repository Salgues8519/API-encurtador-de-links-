import { Request, Response } from "express";
import { lerDados, adicionarDados } from "../utilitarios/arquivos";
import Link from "../modelos/Link";


export default class CadastroLink{
    async controlador(req:Request, res: Response):Promise <any>{
        const{url, identificador}= req.body

        if (!url || !identificador){
            return res.status(400).json({
                mensagem : "Os Campos do body são Obrigatorios"
            })
        }
        
        const bancodedados = await lerDados()

        const existeLink =bancodedados.find(link=>{
            return link.identificador === identificador
        })

        if(existeLink){
            return res.status(400).json({
                mensagem : 'O link já existe'
            })
        }

     const novoLink = new Link(identificador, url)

        await adicionarDados(novoLink)

        return res.status(201).json(novoLink)
    }

}
   
