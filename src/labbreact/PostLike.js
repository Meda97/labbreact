import React, { useState } from 'react'

const PostLike = ({id, type}) => {
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

    const submitLike = async () => {
        const apiResponse = await fetch(postLikeURL, {
            method: 'POST'}
        );

        const data = await apiResponse.json();
        setRes(JSON.stringify(data));

    }

    return postLikeURL !== "" ? (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={() => submitLike()}>Like</button>
            <h3>Skapad like</h3>
            <textarea value={res}></textarea>
        </div>) : (<p>Error!</p>)
}

export default PostLike