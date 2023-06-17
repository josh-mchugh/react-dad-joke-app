import { useState } from 'react';
import PropTypes from 'prop-types';

function App() {
    const [joke, setJoke] = useState('');

    const handleFetchJoke = () => {

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
          <div className="bg-slate-900 h-screen flex items-center">
            <div className="mx-auto max-w-xl mb-24">
              <div className="flex flex-col gap-y-6 px-6 py-6 bg-slate-800 text-center border border-gray-200 rounded-lg shadow">

                <div>
                  <h2 className="text-3xl fond-bold tracking-tight text-white sm:text-4xl">
                  Lets hear some dad jokes!
                  </h2>
                </div>
                <PunchLine joke={joke}/>
                <Button onClick={handleFetchJoke}/>
              </div>
            </div>
          </div>
        </>
  );
};

function PunchLine(props) {
    PunchLine.propTypes = {
        joke: PropTypes.string
    };

    return (
        <>
          <div>
            <p className="text-lg text-white">
              {props.joke}
            </p>
          </div>
        </>
    );
}

function Button(props) {
    Button.propTypes = {
        onClick: PropTypes.func.isRequired
    };
    return (
        <>
          <div>
            <button
              type="button"
              onClick={props.onClick}
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-slate-600 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-600 dark:focus:ring-slate-800">
              Fetch Joke
            </button>
          </div>
        </>
    );
}



export default App;
