const API_KEY = "fdbc7ed963374421b69d652fcd97aac0";

// https://api.nytimes.com/svc/topstories/v2/home.json?

export const res = () => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
        .then(res => res.json())
        .catch(err => console.error(err));
}; 