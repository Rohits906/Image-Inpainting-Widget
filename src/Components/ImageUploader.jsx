import React, { useState } from "react";

const ImageUploader = ({ onImageUpload }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      onImageUpload(url);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={preview}
            alt="Uploaded Preview"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
