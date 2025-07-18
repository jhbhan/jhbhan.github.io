"use client"

import { MyPage } from "./MyPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayGround from "./PlayGround";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyPage />
  },
  {
    path: "/playground",
    element: <PlayGround />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
