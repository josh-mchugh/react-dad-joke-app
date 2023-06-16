import { useState } from 'react';
import PropTypes from 'prop-types';

function App() {
    const [joke, setJoke] = useState('');

    const handleFetchJokeClick = () => {

        fetch('https://icanhazdadjoke.com/', {
              headers: {
                accept: "application/json"   
             }
          })
          .then(res => res.json())
          .then(data => setJoke(data.joke))
          .catch(err => console.log(err));
    };

    return (
        <>
          <div className="bg-gray-700 h-screen flex items-center">
            <div className="mx-auto max-w-md text-center flex flex-col gap-y-6 mb-24">
              <div>
                <h2 className="text-3xl fond-bold tracking-tight text-white sm:text-4xl">
                  Lets hear some dad joke!
                </h2>
              </div>
              <div>
                <PunchLine joke={joke}/>
              </div>
              <div>
                <button
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  onClick={() => handleFetchJokeClick()}
                >
                  Fetch Joke
                </button>
              </div>
            </div>
          </div>
        </>
  );
}

function PunchLine(props) {
    PunchLine.propTypes = {
        joke: PropTypes.string
    };

    return (
        <>
          <p className="text-lg text-white">
            {props.joke}
          </p>
        </>
    );

}

export default App;
