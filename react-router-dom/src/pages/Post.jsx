import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Post() {
    const { postId } = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState(null)

    useEffect(() => {

        const fetchAPI = async () => {
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${postId}`
                )
                const data = await res.json()
                setData(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchAPI()
    }, [postId]) // ✅ param dependency

    const goPrev = () => {
        if (Number(postId) > 1) {
            navigate(`/post/${Number(postId) - 1}`)
        }
    }

    const goNext = () => {
        const maxPost = 5;
        if (Number(postId) < maxPost) {
            navigate(`/post/${Number(postId) + 1}`)
        }
    }

    // if (data === null) return <p>Loading...</p>
    if (!data) return <p>Loading...</p>


    return (
        <div>
            <h1>Post Details (ID: {postId})</h1>

            <p>UserId : {data.userId}</p>
            <p>Id : {data.id}</p>
            <p>Title : {data.title}</p>
            <p>Body : {data.body}</p>

            <div style={{ marginTop: '20px' }}>
                <button onClick={goPrev}>
                    ⬅ Previous
                </button>

                <button onClick={() => navigate('/')} style={{ marginLeft: '10px' }}>Home</button>

                <button onClick={goNext} style={{ marginLeft: '10px' }}>
                    Next ➡
                </button>
            </div>
        </div>
    )
}

export default Post
