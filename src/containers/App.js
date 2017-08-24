import React, { Component } from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";

import Home from "../components/HomeScreen";
import reducers from "../reducers/rootReducer";

import promises from "redux-promise";

const logger = createLogger();
const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(logger, promises));

class App extends Component {
    render() {
        console.log(store);
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }
}

export default App;
