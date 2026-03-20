import React, { useState } from "react";

function FormDataUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const uploadImage = async () => {
    // ✅ Image select nahi ki to stop karo
    if (!file) {
      alert("Select Image");
      return;
    }

    // ✅ Selected image ka preview create karega (temporary URL)
    setPreview(URL.createObjectURL(file));

    // ✅ FormData object create (file send karne ke liye)
    const formData = new FormData();

    // ✅ Image ko "image" key ke sath append kar rahe hain
    formData.append("image", file);

    try {
      // ✅ Multipart/Form-data POST request backend ko send
      await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData, // headers manually set nahi karte
      });

      alert("FormData Upload Done");
    } catch {
      // ✅ Error handling
      alert("Error");
    }
  };

  return (
    <div>
      <h2>FormData Upload</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={uploadImage}>Upload</button>

      {/* ✅ Preview image show karega */}
      {preview && <img src={preview} width="200" alt="" />}
    </div>
  );
}

export default FormDataUpload;
