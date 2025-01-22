import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { IPost } from "../../models/IPost"


export class BigPost extends React.Component<IPost, IPost> {     
	constructor(props:IPost){
		super(props);
		this.state = {
			fecha : props.fecha ?? "12/01/1997",		
			titulo : props.titulo ?? "Titulo",
			descripcion : props.descripcion ?? "Descripcion",
			textoBoton : props.textoBoton ?? "Expandir",
			fotoSrc : props.fotoSrc || null,
			contenido : props.contenido ?? "Contenido"
		};
	}

	render(): React.JSX.Element {
		return (
			<article className="post featured">
				<header className="major">
					<span className="date">{this.state.fecha}</span>
					<h2><a href="#">
						{this.state.titulo}					
					</a></h2>
					<p>
						{this.state.descripcion}
					</p>
				</header>
				<a href="#" className="image main"><img src={this.state.fotoSrc!} alt="" /></a>		
				<p className="post-content">{this.state.contenido}asdasdasd</p>						
			</article>
		)
	}
}