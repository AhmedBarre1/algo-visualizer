import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Crystalball from "./components/Crystalball";
import Binarysearch from "./components/Binarysearch";
import Linear from "./components/Linear";

function App() {
  const [breaks, setBreaks] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 3,
  ]);
  const addBars = () => {
    breaks.map((i, index) => {
      let div = document.createElement("div");
      div.style.backgroundColor = "gray";
      div.style.height = "100px";
      div.style.width = "100px";
      div.innerHTML = i;
      div.style.margin = "2px";
      div.classList.add("bar");

      document.body.querySelector(".bars").appendChild(div);
    });
  };

  return (
    <div className=" h-screen text-white w-screen flex justify-center bg-gray-900">
      <div className="w-10/12 mt-5 flex flex-col">
        <Router>
          <div className="flex flex-col">
            <nav>
              <Link to="/">
                <button className="bg-green-400 rounded-lg p-2 w-[10rem]">
                  Crystalball
                </button>
              </Link>

              <Link to="/binary">
                <button className="bg-green-400 rounded-lg p-2 w-[10rem]">
                  Binary Search
                </button>
              </Link>
              <Link to="/linear">
                <button className="bg-green-400 rounded-lg p-2 w-[10rem]">
                  Linear Search
                </button>
              </Link>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/" element={<Crystalball />} />

              <Route path="/binary" element={<Binarysearch />} />

              <Route path="/linear" element={<Linear />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
