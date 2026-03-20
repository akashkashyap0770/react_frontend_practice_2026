import React, { useEffect, useState } from 'react'

function Delete_AllData_Method() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await res.json();
                console.log(data);
                setPosts(data.slice(0, 5));
            } catch (err) {
                console.error("Error fetching posts:", err);
            }
        }
        fetchPost();
    }, []);

    const DeleteAllPosts = async () => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: "DELETE"
            });

            setPosts([]);
            console.log("All posts deleted from UI");
            alert("All posts deleted (UI only)");
        } catch (error) {
            console.error("Error deleting all posts:", error);
        }
    }

    return (
        <div>
            <h1>Delete All Posts Example</h1>
            <div>
                {posts.length === 0 ? (
                    <p>No Posts Available.</p>
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post.id}>
                                <p>{post.title}</p>
                            </div>
                        ))}
                        <button onClick={DeleteAllPosts}>Delete All Posts</button>
                    </>
                )
                }
            </div>
        </div>
    )
}

export default Delete_AllData_Method