import React, { useState } from "react";

function PostData() {
  const [title, setTitle] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handlePostData = () => {
    if (!title) {
      alert("Title cannot be empty");
      return;
    }
    // ✅ Post via your backend
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        userId: 1,
        title,
        body: "This is body content",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data received from backend:", data);
        setResponseData(data);
      })
      .catch((err) => {
        console.error("Error posting via backend:", err);
      });
  };

  return (
    <div>
      <h1>POST Data to API (Mock)</h1>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Enter your Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handlePostData}>Post Data</button>
      </div>
      <div>
        {responseData && (
          <div style={{ marginTop: "20px" }}>
            <h3>✅ Posted Data:</h3>
            <p>
              <strong>ID:</strong> {responseData.id}
            </p>
            <p>
              <strong>Title:</strong> {responseData.title}
            </p>
            <p>
              <strong>Body:</strong> {responseData.body}
            </p>
            <p>
              <strong>ID:</strong> {responseData.userId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostData;
