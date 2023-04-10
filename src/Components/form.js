import React from "react";

const Form = () => {
    return(
        <div className="form-div">
            <form>
                <input type="text" placeholder="Top Text" className="top-text"/>
                <input type="text" placeholder="Bottom Text" className="bottom-text"/>
                <button>Generate a New Meme</button>
            </form>
        </div>
    );
}
export default Form;