import react, {useState, useEffect} from 'react';
import './style.css';

function Skapatråd() {

    const getCategoriesUrl = 'https://forum-api-jkrop.ondigitalocean.app/sandbox/MeddasAPI/category'
    const [forumCategories, setForumCategories] = useState([]);

    useEffect(() => {
        if(forumCategories.length === 0) {
            fetch(getCategoriesUrl).then(res => res.json().then(data => setForumCategories(data)));
        }
    })
    // console.log(forumCategories)
    // const catDropdown = (
    //     <select>
    //         {forumCategories.map(p => (<option value={p._id}>{p.name}</option>))}
    //     </select>
    // );

    const [threadtitle, setThreadtitle] = useState("");
    const handleTitleChange = (event) => {
        setThreadtitle(event.target.value)
    }

    const [threadmessage, setThreadmessage] = useState("");
    const handleMessageChange = (event) => {
        setThreadmessage(event.target.value)
    }

    const [categoryid, setCategoryid] = useState("");
    const handleCategoryid = (event) => {
        setCategoryid(event.target.value)
    }

    const getThreadUrl = `https://forum-api-jkrop.ondigitalocean.app/category/${categoryid}/thread`

    function Submit(){
        if(threadtitle !== undefined && threadtitle !== "" 
        && threadmessage !== undefined && threadmessage !== "" 
        && categoryid !== undefined && categoryid !== ""){

        const requestBody = {
            "title": threadtitle,
            "content": threadmessage
        };

        const httpConfig = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
        },
        body: JSON.stringify(requestBody)}

        fetch(getThreadUrl,httpConfig)
        .then(res => res => { setThreadtitle(""); setThreadmessage(""); res.json()})
    }
}
    


    return (
        <react.Fragment>
            <div className = "container">
                <h1>Skapatråd</h1>
                <p>Titel:</p>
                <input type="text" value={threadtitle} onChange={(event) => handleTitleChange(event)}/>
                <br></br>
                <br></br>
                <label for="fourm">Forum:</label>
                <select onChange={(event) => handleCategoryid(event)}>
                <option disabled selected value>-- Välj kategori --</option>{forumCategories.map(p => (<option value={p._id}>{p.name}</option>))}
                </select>
                <br></br>
                <br></br>
                <textarea name="meddelande" id="meddelande" cols="45" rows="5" value={threadmessage} onChange={(event) => handleMessageChange(event)}/> 
                <br></br>
                <br></br>
                <input type="submit" name="skicka" id="skicka" value="Starta Tråd" onClick={() => Submit()}/>
            </div>
        </react.Fragment>
    )
}

export default Skapatråd;