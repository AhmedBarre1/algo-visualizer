import { useEffect, useState, useRef } from "react";
import React from "react";

const Binarysearch = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const listref = useRef([]);
  const [divbreaks, setDivbreaks] = useState([]);

  useEffect(() => {
    let paragraphs = listref.current.querySelectorAll("p");
    setDivbreaks(paragraphs);
  }, [divbreaks.current]);

  const binary_search = async (target = 3) => {
    if (typeof window !== "undefined") {
      const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
      let left = 0;
      let right = list.length;

      while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        let v = list[mid];

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
  return (
    <div className="flex flex-col w-full">
      <button
        onClick={() => binary_search()}
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

export default Binarysearch;
