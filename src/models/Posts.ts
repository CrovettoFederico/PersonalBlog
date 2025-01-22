import { IPost } from "./IPost";

export class Post implements IPost{
    descripcion?: string | undefined;
    fecha?: string | undefined;
    fotoSrc: string;
    textoBoton?: "Expandir" | "Expand" | "Cerrar" | "Close" | undefined;
    titulo?: string | undefined;
    contenido? : string;

    constructor(post:IPost | undefined){
        this.descripcion = post?.descripcion ?? "";
        this.fecha = post?.fecha ?? "";
        this.fotoSrc = post?.fotoSrc ?? "";
        this.textoBoton = post?.textoBoton ?? "Expandir"
        this.titulo = post?.titulo ?? ""
        this.contenido = post?.contenido ?? ""
    }
}