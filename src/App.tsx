import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Crystalball from "./components/Crystalball";
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

  const binary_search = async (target = 3) => {
    if (typeof window !== "undefined") {
      const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
      let divbreaks = document.body.querySelectorAll(".bar");
      let left = 0;
      let right = breaks.length;

      while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        let v = breaks[mid];
        console.log(divbreaks);

        for (let i = 0; i < divbreaks.length; i++) {
          if (i >= left && i <= right) {
            divbreaks[i].style.backgroundColor = "dodgerblue";
          } else {
            divbreaks[i].style.backgroundColor = "gray";
          }
          await sleep(50);
        }

        if (v === target) {
          divbreaks[mid].style.backgroundColor = "lightgreen";
          return true;
        } else if (v > target) {
          divbreaks[mid].style.backgroundColor = "orange";
          await sleep(500);
          divbreaks[mid].style.backgroundColor = "red";
          right = mid;
        } else {
          divbreaks[mid].style.backgroundColor = "orange";
          await sleep(500);
          divbreaks[mid].style.backgroundColor = "red";
          left = mid + 1;
        }
      }
    }
  };

  const linear = async () => {
    if (typeof window !== "undefined") {
      const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
      let divbreaks = document.body.querySelectorAll(".bars");
      for (let i = 0; i < divbreaks.length; i++) {
        if (divbreaks[i].innerHTML == 1) {
          divbreaks[i].style.backgroundColor = "orange";
          await sleep(500);
          divbreaks[i].style.backgroundColor = "lightgreen";
          break;
        } else {
          divbreaks[i].style.backgroundColor = "orange";
          await sleep(500);
          divbreaks[i].style.backgroundColor = "red";
        }
      }
    }
  };

  return (
    <div className=" h-screen text-white w-screen flex justify-center bg-gray-800">
      <div className="w-10/12 mt-5 flex flex-col">
        <Router>
          <div className="flex flex-col">
            <nav>
              <Link to="/">
                <button className="bg-green-400 rounded-lg p-2 w-[10rem]">
                  Chat
                </button>
              </Link>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/" element={<Crystalball />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
