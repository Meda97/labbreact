import React, { useState } from 'react'

const baseURL = `https://forum-api-jkrop.ondigitalocean.app`;

const PostComment = ({id}) => {
  console.log(id)
    const postCommentURL = `${baseURL}/thread/${id}/comment`

    const [commentTitle, setCommentTitle] = useState('');
    const [commentContent, setCommentContent] = useState('');

    const [response, setResponse] = useState('');

    const handleOnChange = (e) => {
        setCommentTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setCommentContent(e.target.value);
    }

    const submitComment = async () => {
      const requestBody = {
        "title": commentTitle,
        "content": commentContent
      };

      const apiResponse = await fetch(postCommentURL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
        body: JSON.stringify(requestBody)
      });
      
      const data = await apiResponse.json();
      setCommentTitle('');
      setCommentContent('');
      setResponse(JSON.stringify("Titel:  " + data.title) + "\n" + JSON.stringify("Kommentar:  " + data.content));
    }

    return (
      <div>
        <h2>Kommentera tråd</h2>
        <section>
          <label>Titel:</label>
          <br></br>
          <input type="text"
            value={commentTitle}
            onChange={(e) => handleOnChange(e)}
          ></input>
        </section>
        <section>
          <label>Kommentar:</label>
          <br></br>
          <textarea type="text" value={commentContent} onChange={(e) => handleContentChange(e)}></textarea>
        </section>
        <button onClick={() => submitComment()}>Skicka</button>
        <br></br>
        <br></br>
        <h3>Ny kommentar</h3>
        <textarea value={response}></textarea>
      </div>
    )
}

export default PostComment;