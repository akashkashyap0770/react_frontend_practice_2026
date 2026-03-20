import React from 'react'

function ListRendering() {

    const arr = ["Akash", "Tinku", "Krishna", "Monu"];

    return (
        <div>
            <h1 className='text-3xl'>👉 List-Rendering in React</h1>
            <div className='flex justify-center gap-x-3 text-black
            [&>p:nth-child(odd)]:bg-purple-300
            [&>p:nth-child(even)]:bg-pink-300
            '>
                {arr.map((elem, index) => (
                    <p key={index} className='mt-5 p-2'>{elem}</p>
                ))}
            </div>
        </div>
    )
}

export default ListRendering