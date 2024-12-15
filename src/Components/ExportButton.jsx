import React from "react";
import { saveAs } from "file-saver";

const ExportButton = ({ originalImage, maskData }) => {
  const handleExport = () => {
    if (!originalImage || !maskData) {
      alert("Please upload an image and draw a mask first.");
      return;
    }

    // Save original image
    saveAs(originalImage, "original-image.jpg");
    
    // Save mask as JSON
    const maskBlob = new Blob([maskData], { type: "application/jpg" });
    saveAs(maskBlob, "mask.jpg");
  };

  return (
    <button onClick={handleExport} style={{ margin: "10px" }}>
      Export Images
    </button>
  );
};

export default ExportButton;
