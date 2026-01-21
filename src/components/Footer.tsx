import React from 'react'
import Content from './Content';


export default function Footer() {
  return (
    <div 
        className='relative h-200'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
            <div className='h-200 sticky top-[calc(100vh-800px)]'>
                <Content />
            </div>
        </div>
    </div>
  )
}

// export default function Footer() {
//   return (
//     <div 
//       className='relative h-200'
//       style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
//     >
//       <div className='fixed bottom-0 h-200 w-full'>
//         <Content />
//       </div>
//     </div>
//   )
// }