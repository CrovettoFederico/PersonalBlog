import * as React from "react";

interface IIntersectionEvent{
    TargetId : string,
    onIntersect : ()=>void,
    repeat : boolean,
    Children? : React.JSX.Element[]
}


export class IntersectionEvent extends React.Component<IIntersectionEvent, IIntersectionEvent> {      
    private target : HTMLElement | null

    constructor(props : IIntersectionEvent){
        super(props);
        this.state = {
            TargetId : props.TargetId,
            onIntersect : props.onIntersect,
            repeat : props.repeat,
            Children : props.Children ?? []
        }
        this.target = null;
    }

    componentDidMount(): void {
        this.target = document.getElementById(this.state.TargetId);
        
        const FooterObserver = new IntersectionObserver((entries, observer)=>{
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.state.onIntersect();
                }
               
                if(!this.state.repeat)
                    observer.unobserve(this.target!);
            })
        });
        
        FooterObserver.observe(this.target!);
    }

    render(): React.JSX.Element {
        return (<div id={this.state.TargetId}>
            {this.state.Children?.map((element, index) => ( element ))}
        </div>);
    }

}