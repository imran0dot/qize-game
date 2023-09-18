import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import GameCategory from "../pages/GameCategory/GameCategory.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
       
            { 
              path:"category",
              element:<GameCategory/>
            },
     
]);