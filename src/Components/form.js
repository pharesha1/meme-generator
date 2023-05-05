import React, { useState, useEffect} from "react";

export default function Form (){

    const [allMemes, setAllMemes] = React.useState([]);

    useEffect(() => {

        async function getMemes(){
            const res = await fetch(`https://api.imgflip.com/get_memes`);
            const data = await res.json();
            setAllMemes(data.data.memes);
        }

        try{
            getMemes();
        }catch(err){
            console.error(err);
        }
    }, []);

    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    });

    function generateMeme(){
        const memeUrl = allMemes[Math.floor(Math.random() * allMemes.length)].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage :memeUrl
        }));
    }

    function changeHandler(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
            }
        ));
    }

    return(
        <div className="form-div">

            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    className="top-text" 
                    name="topText"
                    onChange={changeHandler}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    className="bottom-text" 
                    name="bottomText"
                    onChange={changeHandler}
                    value={meme.bottomText}
                />
                <button onClick={generateMeme}>Generate a New Meme</button>
            </div>

            <div className="meme-div">
                <h2 className="meme-div--top-text">{meme.topText}</h2>
                <h2 className="meme-div--bottom-text">{meme.bottomText}</h2>
                <img src={meme.randomImage} alt="meme" className="image"/>
            </div>
        </div>
    );
}