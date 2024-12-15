import React, { useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

const DrawingCanvas = ({ imageSrc, setMaskData }) => {
  const canvasRef = useRef(null);

  // Function to clear the drawing
  const handleClear = () => {
    canvasRef.current.clear();
  };

  // Function to save the mask
  const handleSave = () => {
    const mask = canvasRef.current.getSaveData();
    setMaskData(mask);
  };

  // Ensure image loads as canvas background
  useEffect(() => {
    if (imageSrc && canvasRef.current) {
      const canvasElement = canvasRef.current.canvasContainer.children[1]; // Get the canvas used for drawing
      const ctx = canvasElement.getContext("2d");

      const image = new Image();
      image.src = imageSrc;

      image.onload = () => {
        ctx.drawImage(image, 0, 0, canvasElement.width, canvasElement.height);
      };
    }
  }, [imageSrc]);

  return (
    <div style={{ position: "relative", textAlign: "center", margin: "20px 0" }}>
      {imageSrc && (
        <>
          <CanvasDraw
            ref={canvasRef}
            style={{ border: "1px solid black" }}
            canvasWidth={500}
            canvasHeight={500}
            brushColor="rgba(255, 0, 0, 1)" // Brush color
            brushRadius={5}
          />
          <div style={{ marginTop: "10px" }}>
            <button onClick={handleClear} style={{ marginRight: "10px" }}>
              Clear
            </button>
            <button onClick={handleSave}>Save Mask</button>
          </div>
        </>
      )}
    </div>
  );
};

export default DrawingCanvas;
