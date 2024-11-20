import { Router } from "express";
import CadastroLink from "./controladores/cadastroLinkControlador";
import ObterLink from "./controladores/obterLinkControlador";

const rotas = Router()

rotas.post ('/',new CadastroLink().controlador )
rotas.get('/:identificador', new ObterLink().controlador)





export default rotas