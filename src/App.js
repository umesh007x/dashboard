import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dahsboard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
