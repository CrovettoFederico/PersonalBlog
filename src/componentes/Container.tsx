import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { MiniPost } from "./Posts/MiniPost";

interface IContainerState{
    elements? : React.JSX.Element[]
}

export class Container extends React.Component<IContainerState, IContainerState> {  
    constructor(props:IContainerState){
		super(props);
        this.state = {
            elements : props.elements
        }
    }

    render(): React.JSX.Element {
        return (<>           
            {this.state.elements?.map((element, index) => ( element ))}
        </>);
    }

}