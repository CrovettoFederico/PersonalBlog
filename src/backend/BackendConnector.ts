import { Env_Variables } from "../Env_Variables";
import { IPost } from "../models/IPost";
import { Post } from "../models/Posts";
import { IBackendConnector } from "./IBackendConnector";

export class BackendConnector implements IBackendConnector{
    constructor(){

    }
    async getPosts(start : number = 0, end : number = 4, newerFirst : boolean = true) : Promise<IPost[]> {
        
        
        let response = await fetch(Env_Variables.Api_Url + Env_Variables.Get_Posts,{
            body: JSON.stringify({
                start,
                end,
                newerFirst
            }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
        });
        
        let json = await response.json();
        let Posts : IPost[] = json.map((p: IPost ) => new Post({
            fotoSrc : p.fotoSrc || null,
            descripcion : p.descripcion ?? "",
            titulo : p.titulo ?? "",
            fecha : p.fecha ?? "",
            textoBoton : p.textoBoton ?? "Expandir",
            contenido : p.contenido
        }))

        return Posts;
    }
}