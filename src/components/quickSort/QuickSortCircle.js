import React, { useState, useEffect } from 'react';
import { GiBranchArrow } from 'react-icons/gi'


export default function QuickSortCircle() {
  const [arr, setArr] = useState([]);
  const [time, setTime] = useState(200);
  const [index, setIndex] = useState([]);
  const [pivo, setPivo] = useState([]);

  useEffect(() => {
    let newArray = [];
    for (let i = 0; i < 7; i++) {
      newArray.push(Math.floor(Math.random() * 20));
    }
    setArr([...newArray]);
  }, []);

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
        {arr &&
          arr.map((element, i) => (
            <div
              key={i + 'lol'}
              className={`${pivo.includes(i)? 'select' : null} ${
                index.includes(i) ? 'select2' : null
              } cube`}
            >
              {element}
            </div>
          ))}
      </div>
      <section>
      <button onClick={e => quikSort(arr, 0, arr.length)}>Ordenar</button>
      </section>
    </>
  );
}
