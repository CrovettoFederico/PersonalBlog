import * as React from "react";
import { BackendConnector } from "../backend/BackendConnector"
import { IBackendConnector } from "../backend/IBackendConnector";
import { BigPost } from "../componentes/Posts/BigPost";
import { MiniPost } from "../componentes/Posts/MiniPost";
import { IPost } from "../models/IPost";

export class PostController{
    private BackEnd : IBackendConnector;
    public Posts : IPost[]    
    private LastRequestPosts : IPost[]
    private readonly KeyPrefix : string = "Post-"
    private postCounter = 0;


    constructor (backend? : IBackendConnector){
        this.BackEnd = backend ?? new BackendConnector();
        
        this.Posts = []
        this.LastRequestPosts = []   
    }

    private async getPosts(start : number = 0, end : number = 4, newerFirst : boolean = true){
        return (await this.BackEnd.getPosts(start, end, newerFirst)).sort((a, b) =>{
            let aDate = new Date(a.fecha ?? "");
            let bDate = new Date(b.fecha ?? "");
            return bDate.getTime() - aDate.getTime()
        }); 
    }

    async getLastPost(){
        this.LastRequestPosts = await this.getPosts(0, 1, true);
        this.LastRequestPosts.forEach(p=>{
            this.Posts.push(p);
            this.postCounter++;
        })
        return <BigPost {...this.LastRequestPosts[0]} key={this.KeyPrefix + "0"}/>
    }

    async getMiniPosts(start : number = 0, end : number = 4, newerFirst : boolean = true){
        
        this.LastRequestPosts = await this.getPosts(start, end, newerFirst);
        this.LastRequestPosts.forEach(p=>{
            this.Posts.push(p);            
        })
        

        return this.LastRequestPosts.map((p,i)=> {
            this.postCounter++;
            return <MiniPost {...p} key={this.KeyPrefix + this.postCounter} />
        }, )
    }
}