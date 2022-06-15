import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Raiting/Raiting";

function App() {
    return (
        <div>
            <input />
            <input checked={true} value="yo" type={"checked"} />
            <Rating/>
            <Accordion/>

        </div>
    );
}



export default App;
