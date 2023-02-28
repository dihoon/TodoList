import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";


function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
        </div>
    </BrowserRouter>);
}

export default App;
