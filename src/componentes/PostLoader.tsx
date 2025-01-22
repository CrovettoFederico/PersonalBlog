import "../assets/css/main.css";
import "../assets/css/fontawesome-all.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { MiniPost } from "../componentes/Posts/MiniPost";
import { Container } from "../componentes/Container";
import { BigPost } from "../componentes/Posts/BigPost";
import { PostController } from "../controllers/PostController";
import { BackendConnector } from "../backend/BackendConnector";
import { IntersectionEvent } from "../componentes/IntersectionEvent"

const PostMock = [
	<MiniPost fotoSrc="images/pic01.jpg"/>,
	<MiniPost fotoSrc="images/pic02.jpg"/>,
]

const LastPostMock = [<BigPost fotoSrc="images/pic01.jpg"/>]

export class PostLoader{

    private readonly PostSection = ReactDOM.createRoot(document.getElementById('postsSection')!);
    private readonly LastPostSection =ReactDOM.createRoot(document.getElementById('lastPostSection')!);
    private readonly FooterSection = ReactDOM.createRoot(document.getElementById('footer-posts')!);
    private readonly postsController = new PostController(new BackendConnector());

    private indexStart = 1;
    private indexEnd = 5;
    private indexOffset = 4

    private LastPost : [React.JSX.Element] | undefined;
    private miniPosts : React.JSX.Element[] | undefined

    constructor(){

    }

    LoadPosts = async()=>{    

        this.LastPost = [await this.postsController.getLastPost()]!;
        this.miniPosts = await this.postsController.getMiniPosts(this.indexStart, this.indexEnd, true)!;

        this.LastPostSection.render(<Container elements={this.LastPost!}/>);	
        this.PostSection.render(<Container elements={this.miniPosts!}/>); 
        

        this.FooterSection.render(<IntersectionEvent 
            TargetId="get-more-posts" 
            repeat={true}
            onIntersect={()=>{
                	this.loadMorePosts();
            }} 
            Children={[<img key={"Spinner"} src="./images/spinner-solid.svg" className="spinner fa-spin" alt="Spinner" />]}
        />)
    }

    loadMorePosts = ()=>{
        this.indexStart += this.indexOffset;
        this.indexEnd += this.indexOffset;
        this.postsController.getMiniPosts(this.indexStart, this.indexEnd, true).then(posts=>{
            
            posts.forEach(p=>{
                this.miniPosts?.push(p);					
            })
            
            this.PostSection.render(<Container elements={this.miniPosts!}/>)		
            
            if(posts.length == 0){
                this.FooterSection.render(<p className="no-more-posts">No hay mas posts que cargar.</p>)
            }
        })		
    }


}