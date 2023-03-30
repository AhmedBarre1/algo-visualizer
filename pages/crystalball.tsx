import React, { useState, useRef, useEffect } from "react";

const Crystalball = () => {
  const [breaks, setBreaks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
  const breaksRef = useRef([]);
  const [divbreaks, setDivbreaks] = useState<any>([]);

  useEffect(() => {
    setDivbreaks(breaksRef.current.querySelectorAll("p"));
  }, [breaksRef.current]);

  const crystalball = async () => {
    if (typeof window !== "undefined") {
      const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

      let jumpamount = Math.floor(Math.sqrt(breaks.length));

      let i = jumpamount;
      for (; i < breaks.length; i += jumpamount) {
        console.log("look", divbreaks[0]);
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
    <div className="flex flex-col">
      Crystalball
      <button
        onClick={() => crystalball()}
        className="bg-green-500 my-2 w-20 h-10 "
      >
        {" "}
        start{" "}
      </button>
      <div ref={breaksRef} className="flex">
        {breaks.map((i) => {
          return (
            <p className="bg-[gray] border-[1px] border-gray-400 h-12 w-20">
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
