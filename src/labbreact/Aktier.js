import react from 'react';
import {
    useParams
  } from "react-router-dom";

function Aktier()
    {const {id, name} = useParams();
    return (
        <div>
            <h2>{name}</h2>
            <p>{id}</p>
        </div>
    )
}

export default Aktier;