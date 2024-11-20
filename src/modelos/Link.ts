export default class Link {
    readonly identificador: string 
    url: string
    visitas: number

    constructor(indetificador: string, url: string){
        this.identificador = indetificador
        this.url = url
        this.visitas = 0
    }
}
