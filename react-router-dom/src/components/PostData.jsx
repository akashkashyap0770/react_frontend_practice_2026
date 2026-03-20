import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function PostData() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                    method: "GET",
                    headers: { "content-type": "application/json" },
                });
                const data = await res.json();
                console.log("Posts Data", data.slice(0, 5));
                setPosts(data.slice(0, 5));
            } catch (error) {
                console.log(error);
            }
        }
        fetchAPI();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className='flex justify-center'>
                    <NavLink to={`/post/${post.id}`} className='w-[600px] text-left cursor-pointer'>
                        <span>{post.id} :- {post.title}</span>
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default PostData
