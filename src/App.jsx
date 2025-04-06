import { useEffect, useState } from "react";
import InitialPage from "./pages/InitialPage";
import Home from "./pages/Home";
import EndPage from "./pages/EndPage";

function App() {
  const [currentPage, setCurrentPage] = useState("initial");

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setCurrentPage("home");
    }, 5000);

    const homeTimeout = setTimeout(() => {
      setCurrentPage("end");
    }, 55000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(homeTimeout);
    };
  }, []);

  return (
    <div>
      {currentPage === "initial" && <InitialPage setCurrentPage={setCurrentPage} />}
      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "end" && <EndPage />}
    </div>
  );
}

export default App;
