import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./store";
import SignIn from "./pages/login";
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route path={"/"} exact component={SignIn}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
