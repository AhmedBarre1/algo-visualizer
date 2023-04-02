import React, { useState, useRef, useEffect } from "react";
import "../global.css";
const Crystalball = () => {
  const [breaks, setBreaks] = useState([]);
  const breaksRef = useRef([]);
  const [divbreaks, setDivbreaks] = useState<any>([]);

  useEffect(() => {
    setDivbreaks(breaksRef.current.querySelectorAll("p"));
  }, [breaks]);

  const crystalball = async () => {
    if (typeof window !== "undefined") {
      const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

      let jumpamount = Math.floor(Math.sqrt(breaks.length));

      let i = jumpamount;
      for (; i < breaks.length; i += jumpamount) {
        console.log("look", divbreaks);
        divbreaks[i].style.backgroundColor = "orange";
        if (divbreaks[i].textContent == 1) {
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
        if (divbreaks[i].textContent == 1) {
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

  return (
    <div className="flex flex-col w-full">
      <button
        onClick={() => crystalball()}
        className="bg-purple-400 rounded-lg p-2 my-5 w-[20rem]"
      >
        start crystalball algo
      </button>
      <input
        onChange={(e) => {
          setBreaks([...breaks, e.target.value]);
          e.target.value = [];
        }}
        className="outline-none p-2 mb-4 rounded-lg bg-gray-600"
        placeholder="add array"
      />
      <button onClick={() => setBreaks([])}> clear search array </button>
      <div ref={breaksRef} className="flex flex-wrap">
        {breaks.map((i) => {
          return (
            <p className="bg-gray-700 border-[1px] border-gray-600 p-2 rounded-md h-12 w-20">
              {" "}
              {i}{" "}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Crystalball;
