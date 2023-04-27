import React from "react";
import memesData from "./memesData";

export default function Form (){

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    const [meme, setMeme] = React.useState({
        topText :"",
        bottomText:"",
        randomImage : "https://i.imgflip.com/30b1gx.jpg"
    });

    function generateMeme(){
        const memeUrl = allMemeImages.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage :memeUrl
        }));
    }

    const [memeTexts, setMemeTexts] = React.useState({topText: "", bottomText: "", checkbox: false, employment: ""});

    console.log(memeTexts);

    function changeHandler(event){
        const {name, value, type, checked} = event.target;
        setMemeTexts(prevMemeTexts => {
            return {
                ...prevMemeTexts,
                [name]: type === "checkbox"? checked : value
            }
        });
    }

    return(
        <div className="form-div">
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    className="top-text" 
                    onChange={changeHandler} 
                    name="topText"
                    value={memeTexts.topText}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    className="bottom-text" 
                    onChange={changeHandler} 
                    name="bottomText"
                    value={memeTexts.bottomText}
                />
                <input 
                    type="checkbox" 
                    onChange={changeHandler} 
                    name="checkbox"
                    checked={memeTexts.checkbox}
                />
                <button onClick={generateMeme}>Generate a New Meme</button>
            </div>

            <fieldset>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={changeHandler}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={changeHandler}
                />
                <label htmlFor="full-time">Full-time</label>
                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={changeHandler}
                />
                <label htmlFor="part-time">Part-time</label>
            </fieldset>

            <div className="image-div">
                <img src={meme.randomImage} alt="meme" className="image"/>
            </div>
        </div>
    );
}