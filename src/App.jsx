import React, { useState } from "react";
import ImageUploader from "./Components/ImageUploader";
import DrawingCanvas from "./Components/DrawingCanvas";
import ExportButton from "./Components/ExportButton";

const App = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [maskData, setMaskData] = useState(null);

  return (
    <div style={{ padding: "20px", textAlign: "center" }} className="main">
      <h1>Image Inpainting Widget</h1>
      <ImageUploader onImageUpload={setImageSrc} />
      {imageSrc && (
        <DrawingCanvas imageSrc={imageSrc} setMaskData={setMaskData} />
      )}
      <ExportButton originalImage={imageSrc} maskData={maskData} />
    </div>
  );
};

export default App;
