import react, {useState, useEffect} from 'react';
import {
    useParams
  } from "react-router-dom";
  import './style.css';


function Aktier(){
    const {id, name} = useParams();

    const thread = `https://forum-api-jkrop.ondigitalocean.app/category/${id}/thread`
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        if(threads.length === 0) {
            fetch(thread).then(res => res.json().then(data => setThreads(data)))
        }
    })

    return (
        <div>
            <h2>{name}</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Titel</th>
                            <th>Trådmeddelande</th>
                        </tr>
                    </thead>
                </table>
            </div>

            {threads.map( item => (<div><p>{item.title}</p><p>{item.content}</p></div>))}
        </div>
    )
}


export default Aktier;