import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function Note(props){

    function handleClick(event){
        props.onDelet(props.id)
    }

    return(

        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.data}</p>
            <button onClick={handleClick}><DeleteForeverIcon></DeleteForeverIcon></button>
        </div>
    );
}

export default Note;