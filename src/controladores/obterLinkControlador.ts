import { Request, Response  } from "express"
import { contarVisitas, lerDados } from "../utilitarios/arquivos"



export default class  ObterLink {
    async controlador (req:Request, res:Response):Promise<any> {
         const {identificador} = req.params

         const bancodedados = await lerDados()

         const existeLink =bancodedados.find(link=>{
             return link.identificador === identificador
         })
 
         if(!existeLink){
             return res.status(404).json({
                 mensagem : 'O link não existe'
             })
         }

         await contarVisitas(existeLink.identificador)

         return res.status(200).json({
            url: existeLink.url
         })
    }
}