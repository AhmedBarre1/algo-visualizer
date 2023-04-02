import React from "react";
import { useEffect, useState, useRef } from "react";
const Linear = () => {
  const [list, setList] = useState([3, 4, 5, 6, 7, 8]);
  const listref = useRef([]);
  const [divbreaks, setDivbreaks] = useState([]);

  useEffect(() => {
    let paragraphs = listref.current.querySelectorAll("p");
    setDivbreaks(paragraphs);
  }, [divbreaks.current]);

  const linear_search = async (target) => {
    if (typeof window !== "undefined") {
      const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
      for (let i = 0; i < divbreaks.length; i++) {
        if (divbreaks[i].innerHTML == target) {
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
    <div className="flex flex-col w-full">
      <button
        onClick={() => linear_search(7)}
        className="bg-purple-400 rounded-lg p-2 my-5 w-[20rem]"
      >
        start binary search algo
      </button>
      <input
        className="outline-none p-2 mb-4 rounded-lg bg-gray-600"
        placeholder="add array"
      />
      <div ref={listref} className="flex flex-wrap">
        {list.map((i) => {
          return (
            <p className="bg-gray-700 border-[1px] border-gray-600 p-2 rounded-md h-12 w-20">
              {" "}
              {i}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Linear;
