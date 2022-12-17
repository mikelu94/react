import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import 'bulma/css/bulma.css';
import App from './components/App';
import HomeRoute from './routes/home';
import RouterProviderRoute from './routes/router-provider';
import OutletRoute from './routes/outlet';
import RouteRoute from './routes/route';
import LinkRoute from './routes/link';
import * as serviceWorker from './serviceWorker';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route path="" element={<HomeRoute/>}/>
    <Route path="router-provider" element={<RouterProviderRoute/>}/>
    <Route path="outlet" element={<OutletRoute/>}/>
    <Route path="route" element={<RouteRoute/>}/>
    <Route path="link" element={<LinkRoute/>}/>
  </Route>
));

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
