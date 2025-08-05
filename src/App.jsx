import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Weather from './components/Weather'
import Todo from './components/Todo'
import StarRating from './components/StarRating'

function App() {
  return (
    <>
     <div className='p-6 border-2 text-3xl border-red-400 flex items-center justify-center bg-amber-50'>Hello Everyone this is the Star Rating application in reactjs</div>
     {/* <Weather />
     <Todo/> */}

      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>⭐ Rate this product</h2>
      <StarRating totalStars={5} />
    </div>
    </>
  )
}

export default App
