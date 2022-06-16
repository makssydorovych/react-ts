import React from "react";
import { PageTitle } from "../../App";


 export default function Accordion() {
    return (
        <>
            <PageTitle title={"Accordion"} />
            <AccordionTitle/>
            <AccordionBody/>

        </>
    )
}

function AccordionTitle() {
    return (
        <h3>Menu</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}