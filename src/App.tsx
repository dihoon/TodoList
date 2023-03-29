import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "the-new-css-reset";

function App() {
  return <RouterProvider router={router} fallbackElement={<div>g</div>} />;
}

export default App;
