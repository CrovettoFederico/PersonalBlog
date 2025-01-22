export interface IPost{
	fecha? : string,
	titulo? : string,
	descripcion? : string,
	textoBoton? : "Expandir" | "Expand" | "Cerrar" | "Close",
	fotoSrc : string | null
	contenido? : string
	InsideFormat?: "unselected-post-inner" | "selected-post-inner" | ""
	OutsideFormat?: "unselected-post-outer" | "selected-post-outer" | "",	
}