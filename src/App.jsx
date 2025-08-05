import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Weather from './components/Weather'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='p-6 border-2 text-3xl border-red-400 flex items-center justify-center bg-amber-50'>Hello Everyone this is the Todo application in reactjs</div>
     {/* <Weather /> */}
     <Todo/>
    </>
  )
}

export default App
