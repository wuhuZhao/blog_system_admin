import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./store";
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>

                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
