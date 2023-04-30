import React, { useState } from 'react'
import image1 from "../assets/images/img1.jpeg";
import Draggable from "react-draggable";

const zoomStep = 1;
const maxScale = 5;
const minScale = 1;
const defaultScale = minScale;
const defaultRotate = 0;

const SingleImage = () => {
    const [scale, setScale] = useState(defaultScale);
    const [rotate, setRotate] = useState(defaultRotate);
    const [version, setVersion] = useState(0);
    const zoomIn = () => {
        const newScale = scale + zoomStep;
        setScale(newScale <= maxScale ? newScale : maxScale)
    }
    const zoomOut = () => {
        const newScale = scale - zoomStep;
        setScale(newScale >= minScale ? newScale : minScale)
    }
    const reset = () => {
        setScale(defaultScale);
        setRotate(0);
        setVersion(version + 1)
    }
    const rotating = () => {
        setRotate(rotate === 270 ? 0 : rotate + 90)
    }
    const isDraggable = scale > 1;
    return (
        <div>
            <h1>Single Image in a page</h1>
            <button onClick={zoomIn}>ZOOOM IN</button>
            <button onClick={reset}>RESET</button>
            <button onClick={zoomOut}>ZOOM OUT</button>
            <button onClick={() => rotating()}>ROTATE</button>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "20px" }} >
                <div style={{ width: "300px", overflow: "hidden" }} >
                    <Draggable disabled={!isDraggable} key={version}>
                        <div style={isDraggable ? { cursor: "move" } : null}>
                            <img
                                style={{
                                    transform: `scale(${scale}) rotate(${rotate}deg)`,
                                    width: "100%"
                                }}
                                draggable="false"
                                src={image1}
                                alt=''
                            />
                        </div>
                    </Draggable>
                </div>
            </div>
        </div>
    )
}

export default SingleImage