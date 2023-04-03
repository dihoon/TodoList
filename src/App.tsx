import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "the-new-css-reset";
import { worker } from "./mocks/worker";

worker.start();

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
