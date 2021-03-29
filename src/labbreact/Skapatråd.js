import react from 'react';
import './style.css';

function Skapatråd() {
    return (
        <react.Fragment>
            <div className = "container">
                <h1>Skapatråd</h1>
                <p>Förnamn:</p>
                <input type="fnamn" name="förnamn"/>
                <br></br>
                <br></br>
                <p>Efternamn:</p>
                <input type="enamn" name="efternamn"/>
                <br></br>
                <br></br>
                <p>Email:</p>
                <input type="email" name="Email"/>
                <br></br>
                <br></br>
                <br></br>
                <label for="cars">Forum:</label>
                <select name="cars" id="cars">
                    <option value="volvo">Aktier</option>
                    <option value="saab">Fonder</option>
                    <option value="opel">Sparmål</option>
                </select>
                <br></br>
                <br></br>
                <textarea name="meddelande" id="meddelande" cols="45" rows="5"></textarea> 
                <br></br>
                <br></br>
                <input type="submit" name="skicka" id="skicka" value="Starta Tråd" />
            </div>
        </react.Fragment>
    )
}

export default Skapatråd;