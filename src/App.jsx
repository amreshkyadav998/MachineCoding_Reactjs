import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Weather from './components/Weather'
import Todo from './components/Todo'
import StarRating from './components/StarRating'
import SnakeAndLadder from './components/SnakeAndLadder'

function App() {
  return (
    <>
    <div>
     <div className='p-6 border-2 text-3xl border-red-400 flex items-center justify-center bg-amber-50'>Hello Everyone this is the Star Rating application in reactjs</div>

     {/* weather */}
     {/* <Weather />


// Todo
     <Todo/> */}


{/* star rating */}
      {/* <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>⭐ Rate this product</h2>
      <StarRating totalStars={5} /> */}

{/* Snake and Ladder */}
       <h1 style={{ textAlign: "center" }}>🐍 Snake & Ladder 🎲</h1>
      <SnakeAndLadder />
    </div>
    </>
  )
}

export default App
