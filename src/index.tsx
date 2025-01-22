import "./assets/css/main.css";
import "./assets/css/fontawesome-all.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { MiniPost } from "./componentes/Posts/MiniPost";
import { Container } from "./componentes/Container";
import { BigPost } from "./componentes/Posts/BigPost";
import { PostController } from "./controllers/PostController";
import { BackendConnector } from "./backend/BackendConnector";
import { IntersectionEvent } from "./componentes/IntersectionEvent"
import { PostLoader } from "./componentes/PostLoader";

let postLoader = new PostLoader();

async function initialize() {
	await postLoader.LoadPosts();
}

initialize();




