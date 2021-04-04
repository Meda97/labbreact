import React, { useState } from 'react'
const PostLike = ({id, type, likes}) => {
    let postLikeURL = "";
    if(type === "COMMENT") {
        postLikeURL = `https://forum-api-jkrop.ondigitalocean.app/comment/${id}/like`;
    }
    else if(type === "THREAD") {
        postLikeURL = `https://forum-api-jkrop.ondigitalocean.app/thread/${id}/like`;
    }
    else{
        postLikeURL = "";
    }
    const [res, setRes] = useState('');
    const [count, setCount] = useState(likes++);
    const submitLike = async () => {
        const apiResponse = await fetch(postLikeURL, {
            method: 'POST'}
        )
        setRes(JSON.stringify(setCount(prevCount => prevCount + 1)));
    }
    return postLikeURL !== "" ? (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={() => {submitLike()}}>Like</button>
            <h3>Skapad like</h3>
            <textarea value={count}></textarea>
        </div>) : (<p>Error!</p>)
}
export default PostLike