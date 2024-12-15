# Image Inpainting Widget

This is a simple React-based web application that allows users to:

1. **Upload an image**.
2. **Draw on the image to create a mask**.
3. **Export the original image and mask data** for further processing, such as inpainting or other tasks.

The application is built using **React**, **Vite**, and the `react-canvas-draw` library.

---

## Features

- **Image Upload**: Users can upload an image to display it in the canvas.
- **Draw Mask**: Users can draw directly on the uploaded image to create a mask.
- **Clear and Save**: Users can clear the drawing or save the mask data in JSON format.
- **Export Functionality**: Users can export both the original image and the mask data.

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd image-inpainting-widget
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm run dev
```

The application will start at `http://localhost:5173`.

---

## Project Structure

```plaintext
src/
├── components/
│   ├── ImageUploader.jsx    # Component for uploading images
│   ├── DrawingCanvas.jsx    # Component for drawing masks on the image
│   └── ExportButton.jsx     # Component for exporting images and masks
├── App.jsx                  # Main application component
├── main.jsx                 # Entry point for the React application
├── index.css                # Styling
```

---

## Usage

### 1. Upload an Image

Click the **"Choose File"** button to upload an image. The uploaded image will be displayed in the canvas.

### 2. Draw a Mask

Once the image is displayed, you can:

- Draw over the image using the drawing tool.
- Use the "Clear Mask" button to erase your drawings.

### 3. Save the Mask

Click the **"Save Mask"** button to save the mask data (JSON format). This data can be used for inpainting tasks or other processing.

### 4. Export Data

Click the **"Export Images"** button to download:

- The original uploaded image.
- The mask data in JSON format.

---

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Vite**: Fast build tool for modern web projects.
- **react-canvas-draw**: Library for creating and managing canvas-based drawings.

---

## Future Enhancements

1. **Overlay Mask Export**: Allow users to export the mask as an image overlaying the original image.
2. **Brush Settings**: Add options to adjust the brush size and color.
3. **Responsive Canvas**: Dynamically resize the canvas to match the uploaded image dimensions.

---
