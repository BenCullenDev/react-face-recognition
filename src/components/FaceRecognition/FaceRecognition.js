import React from "react";

const FaceRecognition = ({imgURL}) => {
    return (
        <div className="center">
            <img alt='' src={imgURL}/>
        </div>
    )
}

export default FaceRecognition