import React, { useState, useEffect } from 'react';
import { GiBranchArrow } from 'react-icons/gi'


export default function QuickSort() {
  const [arr, setArr] = useState([]);
  const [time, setTime] = useState(50);
  const [lines, setLines] = useState(63);
  const [index, setIndex] = useState([]);
  const [pivo, setPivo] = useState([]);

  useEffect(() => {
    let newArray = [];
    for (let i = 0; i < lines; i++) {
      newArray.push(Math.floor(Math.random() * 20));
    }
    setArr([...newArray]);
  }, [lines]);

  let indexes = [];
  let pivos = [];

  const quikSort = (arr, start, end) => {
    if (start >= end) return;
    if (indexes.length != 0) {
      indexes = [];
    }
    setTimeout(() => {
      comparar(arr, start, start, start + 1, end);
    });
  };

  const comparar = (arr, index, start, comparador, end) => {
    if (comparador >= end) {
      pivos.push(index);
      setPivo([...pivos]);
      quikSort(arr, start, index);
      quikSort(arr, index + 1, end);
    } else if (arr[index] >= arr[comparador] && comparador - index === 1) {
      let temp = arr[index];
      arr[index] = arr[comparador];
      arr[comparador] = temp;
      setArr([...arr]);
      setTimeout(() => {
        comparar(arr, index + 1, start, comparador + 1, end);
      }, time);
    } else if (arr[index] >= arr[comparador] && comparador - index > 1) {
      setTimeout(() => {
        return swap(arr, index, start, comparador, comparador, end);
      }, time);
    } else {
      setTimeout(() => {
        return comparar(arr, index, start, comparador + 1, end);
      }, time);
    }
  };

  const swap = (arr, index, start, compare, constCompare, end) => {
    if (compare <= index)
      return comparar(arr, index + 1, start, constCompare + 1, end);

    const temp = arr[compare - 1];

    arr[compare - 1] = arr[compare];

    arr[compare] = temp;
    indexes.push(compare - 1);
    setIndex([...indexes]);
    setArr([...arr]);
    setTimeout(() => {
      indexes = [];
      return swap(arr, index, start, compare - 1, constCompare, end);
    }, time);
  };

  return (
    <>
      <div className="cubes">
        {arr.length &&
          arr.map((element, i) => (
            <GiBranchArrow
              style={{
                height: `${10 * element}px`,
                width: `calc(100% / ${arr.length})`,
                margin: '0 0.5px'
              }}
              key={i + 'lol'}
              className={`${index.includes(i) ? 'select' : null} ${
                pivo.includes(i) ? 'select2' : null
              } line`}
            />
          ))}
      </div>
      <section>
        <button
          onClick={e => {
            quikSort(arr, 0, arr.length);
          }}
        >
          Ordenar
        </button>
        <input
          onChange={e => setTime(e.target.value)}
          type={'range'}
          value={time}
          min="15"
          max="60"
        />
        <input
          onChange={e => setLines(e.target.value)}
          type={'range'}
          value={lines}
          min="15"
          max="100"
        />
      </section>
    </>
  );
}
