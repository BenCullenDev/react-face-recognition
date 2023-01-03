import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className="f3">
                {"Want to detect the faces in your image? Upload one now and give it a try!"}
            </p>
            <div className="center">
                <div className="form pa4 br3 shadow-5 center">
                    <input className="fa2 pa2 w-70 center"></input>
                    <button className="w-30 grow f4 link ph3 dib white bg-light-blue">Detect</button></div>
            </div>
        </div>

    )
}

export default ImageLinkForm