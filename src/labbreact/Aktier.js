import react, {useState, useEffect} from 'react';
import {
    useParams
  } from "react-router-dom";
  import './style.css';

import PostLike from './PostLike';
import PostComment from './PostComment'


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
        <div className="tr">
            <div>
            <h2 style={{color: "red"}}>{name}</h2>
            {threads.map( item => (<div><h3 style={{color: "blue"}}>Titel</h3><p>{item.title}</p><h3 style={{color: "#2eb82e"}}>Trådmeddelande</h3><p>{item.content}</p>
            <ul>
            <li>
                    <PostComment id={item._id}/>
                    <PostLike id={item._id} type="THREAD" likes={item.likes.length}></PostLike>
            </li>
            </ul>
            </div>))}
            </div>
        </div>
    )}

export default Aktier;