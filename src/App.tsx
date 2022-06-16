import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Raiting/Raiting";

function App(props: any) {
    return (
        <div>
            <PageTitle title={"Main"} />
            Article 1
            <Rating value={3}/>
            <Accordion/>
            Article 2
            <Rating value={4}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={0}/>
        </div>
    );
}
export function PageTitle(props: any){
    return(
        <h1>{props.title}</h1>
    )
}

export default App;
