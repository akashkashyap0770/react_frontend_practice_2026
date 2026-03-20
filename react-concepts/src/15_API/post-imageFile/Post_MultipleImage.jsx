import React, { useState } from "react";

// 🗒️ Definition:
// Multiple images ko Base64 string me convert karke
// JSON format me API ko send kar rahe hain.

function Post_MultipleImage() {
  // ✅ Multiple selected images store karega
  const [files, setFiles] = useState([]);

  // ✅ Preview images (base64)
  const [preview, setPreview] = useState([]);

  // ✅ Upload Button Click Function
  const handleMultipleImageFile = () => {
    // Image select nahi ki to alert
    if (files.length === 0) {
      alert("Please select images.");
      return;
    }

    // Base64 images store karne ke liye array
    const base64Images = [];

    // Har file ko read karo
    files.forEach((file) => {
      const reader = new FileReader();

      // File read hone ke baad
      reader.onloadend = () => {
        // Base64 result push
        base64Images.push(reader.result);

        // Jab sab images convert ho jaye
        if (base64Images.length === files.length) {
          // Preview show
          setPreview(base64Images);

          // ✅ Fake API POST Request
          fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
              userId: 1,
              title: "Fake Multiple Image Upload",
              images: base64Images,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("✅ Fake API response:", data);
              alert("✅ Images uploaded (fake)!");
            })
            .catch(() => {
              alert("❌ Upload failed");
            });
        }
      };

      // ✅ Image ko Base64 me convert karega
      reader.readAsDataURL(file);
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🖼️ Multiple Image Upload using Fake API</h2>

      {/* ✅ Multiple Image Select */}
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(Array.from(e.target.files))}
      />

      {/* Upload Button */}
      <button
        onClick={handleMultipleImageFile}
        style={{
          marginLeft: "10px",
          backgroundColor: "blue",
          color: "white",
          padding: "4px 10px",
        }}
      >
        Upload
      </button>

      {/* Preview Section */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {preview.map((src, index) => (
          <div key={index}>
            <h4>✅ Preview {index + 1}</h4>

            <img
              src={src}
              alt={`preview ${index}`}
              style={{ width: "150px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post_MultipleImage;
