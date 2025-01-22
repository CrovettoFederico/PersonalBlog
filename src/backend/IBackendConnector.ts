import { IPost } from "../models/IPost";

export interface IBackendConnector {
    getPosts : (start : number | 0, end : number | 4, newerFirst : boolean | true)=> Promise<IPost[]>
}