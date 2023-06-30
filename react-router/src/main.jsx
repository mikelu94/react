import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import 'bulma/css/bulma.css';
import App from './components/App';
import HomeRoute from './routes/home';
import RouterProviderRoute from './routes/router-provider';
import OutletRoute from './routes/outlet';
import RouteRoute from './routes/route';
import LinkRoute from './routes/link';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route path="" element={<HomeRoute/>}/>
    <Route path="router-provider" element={<RouterProviderRoute/>}/>
    <Route path="outlet" element={<OutletRoute/>}/>
    <Route path="route" element={<RouteRoute/>}/>
    <Route path="link" element={<LinkRoute/>}/>
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
