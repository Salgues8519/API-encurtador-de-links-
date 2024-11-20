import fs from 'fs/promises'
import Link from '../modelos/Link'

const caminhoBancoDeDados = 'src/bancodedados.json'

export async function lerDados(): Promise<Link[]>{
    const dados = await fs.readFile(caminhoBancoDeDados) 
    const parse = JSON.parse(dados.toString())
    return parse
}

export async function adicionarDados(Link: Link){
    const dados = await lerDados()
    dados.push(Link)
    await fs.writeFile(caminhoBancoDeDados, JSON.stringify(dados, null, '\t'))
    
}

export async function contarVisitas(identificador:string){
    const dados = await lerDados()
    
    const link= dados.find(link => {
        return link.identificador === identificador
    })

    const linkComVisitas:Link = {
        identificador: link!.identificador,
        url:link!.url,
        visitas:link!.visitas + 1
     }
    
     const indece = dados.findIndex(link => {
        return link.identificador === identificador
    })

    dados.splice(indece, 1, linkComVisitas)

    await fs.writeFile(caminhoBancoDeDados, JSON.stringify(dados, null, '\t'))

}

