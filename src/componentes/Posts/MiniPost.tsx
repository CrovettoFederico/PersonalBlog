import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { IPost } from "../../models/IPost";
import "./Post.css"

interface IMiniPost extends IPost{
	selected : boolean
}

export class MiniPost extends React.Component<IPost, IMiniPost> {     	
		
	private DivRef  = React.createRef<HTMLDivElement>();
	private ButtonRef = React.createRef<HTMLAnchorElement>();

	constructor(props:IPost){
		super(props);
		this.state = {
			fecha : props.fecha ?? "12/01/1997",		
			titulo : props.titulo ?? "Titulo",
			descripcion : props.descripcion ?? "Descripcion",
			textoBoton : props.textoBoton ?? "Expandir",
			fotoSrc : props.fotoSrc || null,
			contenido : props.contenido ?? "Contenido",
			selected : false
		};
		
	}

	componentDidMount(): void {
		this.ButtonRef.current?.addEventListener("click", this.OpenPost)
	}

	private OpenPost = () => {
		console.log("open post")
		
		setTimeout(()=>{
			this.setState({ InsideFormat : "selected-post-inner" , textoBoton: "Cerrar"})	
			this.ButtonRef.current?.removeEventListener("click", this.OpenPost)

			this.ButtonRef.current?.addEventListener("click", this.ClosePost);
		}, 380)

		this.setState({OutsideFormat: "selected-post-outer"})

		setTimeout(()=>{	
			const rect = this.DivRef.current?.getBoundingClientRect();
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			// Calcula la posición deseada y ajusta el desplazamiento
			const targetY = scrollTop + rect!.top ;

			window.scrollTo({
				top: targetY,
				behavior: 'smooth',
			});
			this.setState({selected:true})
		}, 500)
	}

	private ClosePost = ()=>{
		console.log("close post")


		//this.setState({ InsideFormat : "unselected-post-inner" , textoBoton: "Expandir"})	

			this.setState({ InsideFormat : "unselected-post-inner" , textoBoton: "Expandir"})	
			this.ButtonRef.current?.removeEventListener("click", this.ClosePost)
			this.ButtonRef.current?.addEventListener("click", this.OpenPost);


		this.setState({OutsideFormat: "unselected-post-outer"})

		setTimeout(()=>{	
			const rect = this.DivRef.current?.getBoundingClientRect();
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			// Calcula la posición deseada y ajusta el desplazamiento
			const targetY = scrollTop + rect!.top ;

			window.scrollTo({
				top: targetY,
				behavior: 'smooth',
			});
			this.setState({selected:false})
		}, 500)
		
		
	}
//onClick={this.OpenPost}
	render(): React.JSX.Element {
		return (
			<article  className={this.state.OutsideFormat}>
				<div ref={this.DivRef} className={this.state.InsideFormat}>
					<header>
						<span className="date">{this.state.fecha}</span>
						<h2><a>{this.state.titulo}</a></h2>
						
						{ 
							this.state.selected &&						 
							( <p style={{"marginBottom":"0"}}> {this.state.descripcion}</p> )
						} 
					</header>

					<a className="image fit"><img src={this.state.fotoSrc!} alt="" /></a>
					
					{
						!this.state.selected && 
						( <p>{this.state.descripcion}</p> )
					}
					
					
					{ 
						this.state.selected && 
						( <p>{this.state.contenido}</p> )						
					} 
						

					<ul className="actions special">
						<li>
							<a ref = {this.ButtonRef} className="button" >
								{this.state.textoBoton}
							</a>
						</li>
					</ul>
				</div>
			</article>
		)
	}
}