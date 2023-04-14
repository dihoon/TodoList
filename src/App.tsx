import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "the-new-css-reset";
import { worker } from "./mocks/worker";

if (process.env.NODE_ENV === "production") {
  worker.start({
    serviceWorker: {
      url: './mockServiceWorker.js'
    }
  });
} else {
  worker.start();
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
