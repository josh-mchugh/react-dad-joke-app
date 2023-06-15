import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [] = useState({})

    const handleFetchJokeClick = () => {
        console.log('fetch joke clicked.');  
    };

    return (
        <>
          <div className="bg-gray-700 h-screen flex items-center">
            <div className="mx-auto max-w-md text-center mb-24 lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl fond-bold tracking-tight text-white sm:text-4xl">Lets hear some dad joke!</h2>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <button className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" onClick={() => handleFetchJokeClick()}>Fetch Joke</button>
              </div>
            </div>
          </div>
        </>
  );

}

export default App
