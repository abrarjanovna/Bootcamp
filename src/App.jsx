import { BrowserRouter, Route, Routes } from "react-router-dom";
import Other from "./components/Other";
import {
  About,
  Charts,
  Clients,
  Dashboard,
  Error,
  Location,
  Orders,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Other />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/location" element={<Location />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/about-clients" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
