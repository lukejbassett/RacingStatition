import { Routes, Route } from "react-router-dom";
import { HomePage, DriversPage } from "./services/pages";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drivers" element={<DriversPage />} />
      </Routes>
    </>
  );
}

export default App;
