import React from "react";
import memesData from "./memesData";

export default function Form (){
    
    const [memeImage, setMemeImage] = React.useState("");



    function generateMeme(){
        const memeUrl = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url;
        setMemeImage(memeUrl)
        console.log(memeUrl);
    }

    return(
        <div className="form-div">
            <div className="form">
                <input type="text" placeholder="Top Text" className="top-text"/>
                <input type="text" placeholder="Bottom Text" className="bottom-text"/>
                <button onClick={generateMeme}>Generate a New Meme</button>
            </div>
            <div className="image-div">
                <img src={memeImage} alt="meme" className="image"/>
            </div>
        </div>
    );
}