import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/Root';
import TaskRoot from './routes/Tasks/TaskRoot';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from "./routes/ErrorPage";
import TaskCreate from "./routes/Tasks/TaskCreate";
import {Provider} from "react-redux";
import store from './store'
// routing

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <TaskRoot/>
            }, {
                path: "create",
                element: <TaskCreate/>
            },
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();