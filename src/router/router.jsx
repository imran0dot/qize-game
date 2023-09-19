import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import GameCategory from "../pages/GameCategory/GameCategory.jsx";
import MulitpleChoices from "../pages/GameLayout/mulitpleChoices/index.jsx";
import StartGame from "../pages/GameStart/StartGame.jsx";
import MathPuzzles from "../pages/GameLayout/mathPuzzles/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <StartGame />
      },
      {
        path: "category",
        element: <GameCategory />,
      },
      {
        path: "/category/mulitple-choices",
        element: <MulitpleChoices />
      },
      {
        path: "/category/math-puzzles",
        element: <MathPuzzles />
      }
    ]
  }

]);