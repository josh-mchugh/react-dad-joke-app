export function fetchDadJoke() {
    return fetch('https://icanhazdadjoke.com/', {
          headers: {
            accept: "application/json"   
          }
        })
        .then(res => res.json());
}
