import React, { useEffect, useState } from 'react'

function Delete_SingleData_Method() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data.slice(0, 5));
        }
        fetchPosts();
    }, []);

    const deletePost = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
        });

        // setPosts(posts.filter(post => post.id !== id));

        setPosts((prevPost) => {
            const updatedPost = prevPost.filter((post) => post.id !== id);
            console.log("Updated posts after deletion:", updatedPost);
            return updatedPost;
        });

        alert(`Post ${id} deleted`);
    }

    return (
        <div>
            <h1>Delete Single Post Example</h1>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className='mb-5'>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <button onClick={() => deletePost(post.id)}>Delete Post</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Delete_SingleData_Method