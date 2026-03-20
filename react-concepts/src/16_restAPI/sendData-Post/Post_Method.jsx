import React, { useEffect, useState } from "react";

function Post_Method() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  // 🔹 GET posts (component mount par)
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data.slice(0, 5));
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };
    fetchAPI();
  }, []);

  // 🔹 POST new data
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: posts.length + 1,
      id: posts.length + 1, // ✅ id generated from posts length
      title,
      body: message,
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          //🔹 Header isliye hota hai taaki server ko bataya ja sake ki hum kis type ka data bhej rahe hain.
          headers: { "content-type": "application/json; charset=UTF-8" },
          // 🔹 Body me data hota hai, aur JSON.stringify isliye use hota hai kyunki server ko string (JSON) chahiye, JS object nahi.
          body: JSON.stringify(newPost),
        },
      );

      const data = await response.json();
      console.log("POST Response:", data);

      setPosts([...posts, newPost]);
      setTitle("");
      setMessage("");
      alert(`✅ Post Created Successfully: ${newPost.userId}`);
    } catch (error) {
      console.error("Error creating post:", error);
      alert("❌ Something went wrong!");
    }
  };

  return (
    <div>
      <h2>POST Request – Fetch Data</h2>
      <div className="flex justify-center">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col w-fit gap-y-2 p-4 shadow-2xl shadow-black-300"
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="bg-amber-300 p-2">
            Submit Form
          </button>
        </form>
      </div>
      <div>
        <h2>All Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>UserID:</strong> {post.userId} <strong>id:</strong>{" "}
              {post.id} - <strong>body:</strong> {post.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Post_Method;
