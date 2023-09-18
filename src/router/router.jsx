import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import GameCategory from "../pages/GameCategory/GameCategory.jsx";
import MulitpleChoices from "../pages/GameLayout/mulitpleChoices/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "category",
    element: <GameCategory />,
  },
  {
    path: "/category/name",
    element: <MulitpleChoices />
  }

]);