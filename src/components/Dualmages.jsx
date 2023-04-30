import React, { useState } from 'react'
import image1 from "../assets/images/img1.jpeg";
import image2 from "../assets/images/img2.jpeg";
import Draggable from "react-draggable";

const zoomStep = 1;
const maxScale = 5;
const minScale = 1;
const defaultScale = minScale;
const defaultRotate = 0;

const Dualmages = () => {
    const [scale, setScale] = useState(defaultScale);
    const [rotate, setRotate] = useState(defaultRotate);
    const [version, setVersion] = useState(0);

    const [scaleTwo, setScaleTwo] = useState(defaultScale);
    const [rotateTwo, setRotateTwo] = useState(defaultRotate);
    const [versionTwo, setVersionTwo] = useState(0);

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


    const zoomInTwo = () => {
        const newScale = scaleTwo + zoomStep;
        setScaleTwo(newScale <= maxScale ? newScale : maxScale)
    }
    const zoomOutTwo = () => {
        const newScale = scaleTwo - zoomStep;
        setScaleTwo(newScale >= minScale ? newScale : minScale)
    }
    const resetTwo = () => {
        setScaleTwo(defaultScale);
        setRotateTwo(0);
        setVersionTwo(versionTwo + 1)
    }
    const rotatingTwo = () => {
        setRotateTwo(rotateTwo === 270 ? 0 : rotateTwo + 90)
    }

    const isDraggable = scale > 1;

    const isDraggableTwo = scaleTwo > 1;

    return (
        <div>
            <hr />
            <h1>Dual Images in single page</h1>
            <div style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "center" }} >
                <div>
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

                <div>
                    <button onClick={zoomInTwo}>ZOOOM IN</button>
                    <button onClick={resetTwo}>RESET</button>
                    <button onClick={zoomOutTwo}>ZOOM OUT</button>
                    <button onClick={() => rotatingTwo()}>ROTATE</button>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "20px" }} >
                        <div style={{ width: "300px", overflow: "hidden" }} >
                            <Draggable disabled={!isDraggableTwo} key={versionTwo}>
                                <div style={isDraggableTwo ? { cursor: "move" } : null}>
                                    <img
                                        style={{
                                            transform: `scale(${scaleTwo}) rotate(${rotateTwo}deg)`,
                                            width: "100%"
                                        }}
                                        draggable="false"
                                        src={image2}
                                        alt=''
                                    />
                                </div>
                            </Draggable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dualmages