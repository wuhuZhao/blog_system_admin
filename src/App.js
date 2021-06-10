import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./store";
import SignIn from "./pages/login";
import Home from "./pages/home"
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route path={"/login"} exact component={SignIn}/>
                    <Route path={"/home"} exact component={Home}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
