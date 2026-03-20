import React from 'react'

//🔹 Case 1: (props) use karna
// function Component(props) {
//   return (
//     <div className='text-2xl'>
//       <h1 className='text-3xl'>👉 Components in React</h1>
//         <p>{props.title}</p>
//         <p>{props.description}</p>
//     </div>
//   )
// }


//🔹 Case 2: ({ title, description }) (Destructuring)
function Component({ title, description }) {
  return (
    <div className='text-2xl'>
      <h1 className='text-3xl'>👉 Components in React</h1>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}

export default Component