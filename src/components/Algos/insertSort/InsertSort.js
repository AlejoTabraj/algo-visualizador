import React, { useState, useEffect } from "react";
import { GiBranchArrow } from "react-icons/gi";

export const InsertionSort = () => {
  const [arr, setArr] = useState([]);
  const [index, setIndex] = useState([]);
  const [time, setTime] = useState(50);
  const [lines, setLines] = useState(63);
  const [dis, setDis] = useState(false);
  useEffect(() => {
    let newArray = [];
    for (let i = 0; i < lines; i++) {
      newArray.push(Math.floor(Math.random() * 20));
    }
    setArr([...newArray]);
  }, [lines]);

  function insert(arre, n) {
    let arr = arre;
    if (arr.length == n) return arre;
    let i = n;
    let j = i - 1;
    let temp = arr[i];

    function comparar(arr, j) {
      if (j < 0 || arr[i] > arr[j]) return;
      setIndex(i);
      arr[i] = arr[j];
      arr[j] = temp;
      setArr([...arr]);
      i = i - 1;
      setTimeout(() => {
        comparar(arr, j - 1);
      }, time);
    }
    comparar(arr, j);
    return setTimeout(() => {
      insert(arr, n + 1);
    }, n * time);
  }

  return (
    <>
      <div className="cubes">
        {arr.length &&
          arr.map((element, i) => (
            <GiBranchArrow
              style={{
                height: `${10 * element}px`,
                width: `calc(100% / ${arr.length})`,
                margin: "0 0.5px",
              }}
              key={i + "lol"}
              className={`${i == index - 1 ? "select2" : null}  line`}
            />
          ))}
      </div>
      <section>
        <button
          disabled={dis}
          onClick={(e) => {
            setDis(!dis);
            insert(arr, 1);
          }}
        >
          Ordenar
        </button>
        <input
          disabled={dis}
          onChange={(e) => setTime(e.target.value)}
          type={"range"}
          value={time}
          min="15"
          max="60"
        />
        <input
          disabled={dis}
          onChange={(e) => setLines(e.target.value)}
          type={"range"}
          value={lines}
          min="15"
          max="100"
        />
      </section>
    </>
  );
};
