import { Router } from "express";
import CadastroLink from "./controladores/cadastroLinkControlador";

const rotas = Router()

rotas.post ('/',new CadastroLink().controlador )
rotas.get('/:identificador')





export default rotas