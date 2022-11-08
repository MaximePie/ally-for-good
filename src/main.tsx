import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./components/pages/About/About";
import routes from "./helpers/routes";
import Home from "./components/pages/Home/Home";
import Matilda from "./components/pages/Matilda/Matilda";

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <App />,
    children: [
      {
        path: routes.HOME,
        element: <Home />,
      },
      {
        path: routes.ABOUT,
        element: <About />,
      },
      {
        path: routes.MATILDA,
        element: <Matilda />,
      },
      {
        path: '/test',
        element: <div>Test</div>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
