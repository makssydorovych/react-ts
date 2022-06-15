import React from "react";

 export default function Accordion() {
    return (
        <>
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