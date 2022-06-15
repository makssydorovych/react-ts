import React from "react";

export function Rating() {
    return (
        <>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>


        </>
    )
}

function Star(props: any) {
    return (

            <span>star</span>)
}