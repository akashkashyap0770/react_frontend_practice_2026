import React, { useState } from "react";

function Base64Upload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const uploadImage = () => {
    // ✅ Image select nahi ki to stop karo
    if (!file) {
      alert("Select Image");
      return;
    }

    // ✅ FileReader file ko read karega
    const reader = new FileReader();

    // ✅ File read complete hone ke baad chalega
    reader.onloadend = async () => {
      // Base64 string mil jayegi
      const base64Image = reader.result;

      // Preview show karne ke liye state update
      setPreview(base64Image);

      // ✅ Base64 image JSON format me API ko send
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: base64Image,
        }),
      });

      alert("Base64 Upload Done");
    };

    // ✅ Image ko Base64 format me convert karega
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2>Base64 Upload</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={uploadImage}>Upload</button>

      {preview && <img src={preview} width="200" alt="" />}
    </div>
  );
}

export default Base64Upload;
