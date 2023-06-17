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
              <div className="flex flex-col gap-y-6 px-6 py-6 bg-slate-800 text-slate-200 text-center border border-slate-600 rounded-lg shadow">
                <Header/>
                <PunchLine joke={joke}/>
                <Button onClick={handleFetchJoke} hasJoke={!!joke}/>
              </div>
            </div>
          </div>
        </>
  );
}

function Header(props) {
    return (
        <div>
          <h2 className="text-3xl fond-bold tracking-tight">
            Lets hear some dad jokes!
          </h2>
        </div>
    );
}

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
        hasJoke: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired
    };
    const getButtonText = () => {
        return props.hasJoke ? 'Fetch Another Joke' : 'Fetch Joke';
    };
    return (
        <>
          <div>
            <button
              type="button"
              onClick={props.onClick}
              className="border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-slate-600 hover:text-white hover:bg-slate-600 focus:ring-slate-800">
              { getButtonText() }
            </button>
          </div>
        </>
    );
}



export default App;
