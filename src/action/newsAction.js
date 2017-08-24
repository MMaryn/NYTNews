import * as actionTypes from "../constants/actionTypes";
import mockData from "../core/mockData.json";

const API_KEY = "fdbc7ed963374421b69d652fcd97aac0";
const dataListURl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
// https://api.nytimes.com/svc/topstories/v2/home.json?


// const loadNewsSync = (res) => ({
//     type: actionTypes.LOAD_NEWS,
//     payload: res
// });

export const loadNews = () => {
    const req = fetch(`${dataListURl}`);
    return {
        type: actionTypes.LOAD_NEWS,
        payload: req.then(res => res.json())
    }
};