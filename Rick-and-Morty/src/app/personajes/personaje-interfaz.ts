export interface info{
    info:any
    results:PersonajeInterfaz[]

}

export interface PersonajeInterfaz {
    id : number,
    name : string,
    species : string,
    gender: string,
    image: string ,
    status: string, 
    origin: PersonajeOrigen
}

export interface PersonajeOrigen {
    name: string,
    url: string
}