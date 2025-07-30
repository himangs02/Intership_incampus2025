import React from "react";

function Greetings(props){

    return(
        <>
        <h1 className="text-blue-700 font-semibold text-2xl font-mono m-auto border-b-2 w-max">Hello {props.name}</h1>
        </>
    )
}

export default Greetings;