import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
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

  const crystalball = async () => {
    if (typeof window !== "undefined") {
      const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
      let divbreaks = document.body.querySelectorAll(".bar");

      let jumpamount = Math.floor(Math.sqrt(breaks.length));
      console.log("br", divbreaks);
      let i = jumpamount;
      for (; i < breaks.length; i += jumpamount) {
        divbreaks[i].style.backgroundColor = "orange";
        if (divbreaks[i].innerHTML == 1) {
          divbreaks[i].style.backgroundColor = "lightgreen";
          await sleep(500);
          break;
        } else {
          await sleep(500);
          divbreaks[i].style.backgroundColor = "gray";
          console.log(i);
        }
      }

      i -= jumpamount;

      for (let j = 0; j < jumpamount && i < divbreaks.length; ++j, ++i) {
        divbreaks[i].style.backgroundColor = "dodgerblue";
        sleep(50);
      }

      i -= jumpamount;

      for (let j = 0; j < jumpamount && i < divbreaks.length; ++j, ++i) {
        if (divbreaks[i].innerHTML == 1) {
          divbreaks[i].style.backgroundColor = "lightgreen";
          await sleep(500);
          break;
        }
        divbreaks[i].style.backgroundColor = "red";

        await sleep(500);

        divbreaks[i].style.backgroundColor = "gray";
      }
    }
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
    <div className="bg-gray-800 w-screen h-screen flex items-center flex-col ">
      <div className="w-10/12 mt-10">
        <div className=" w-10/12">
          <button
            onClick={async () => {
              addBars();

              binary_search(3);
            }}
            className="bg-green-500 p-2 w-48 rounded-lg mr-2"
          >
            {" "}
            Binary{" "}
          </button>

          <button
            onClick={async () => {
              addBars();
              crystalball();
            }}
            className="bg-red-500 p-2 w-48 rounded-lg mr-2"
          >
            crystalball{" "}
          </button>
          <button className="bg-orange-500 p-2 w-48 rounded-lg mr-2">
            Linear search{" "}
          </button>
        </div>
        <div className="bg-gray-700 overflow-scroll mt-2 flex bars">hello</div>
      </div>
    </div>
  );
}
