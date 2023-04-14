import React from "react";

const icon = "https://upload.wikimedia.org/wikipedia/en/9/96/Meme_Man_on_transparent_background.webp";

export default function Header() {
    return(
        <div className="header-div">
            <header>
                <img src={icon} alt="meme"/>
                <h2>Meme Generator</h2>
            </header>
        </div>
    );
}