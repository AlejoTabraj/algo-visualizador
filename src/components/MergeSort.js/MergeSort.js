import React, { useState, useEffect } from 'react';
import { GiBranchArrow } from 'react-icons/gi'

export const  MergeSort = () => {
  const [arr, setArr] = useState([]);
  const [index, setIndex] = useState([]);
  const [change, setChange] = useState(true)


  function flatten(arr) {
    const newArr = arr.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc = acc.concat(flatten(item));
      } else {
        acc.push(item);
      }

      return acc;
    }, []);

    return newArr;
  }

  let longitud = 2;
  let temp = [];
  let temp2 = [];

  function merge(array1, array2) {
    let combined = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        combined.push(array1[i]);
        i++;
      } else {
        combined.push(array2[j]);
        j++;
      }
    }
    while (i < array1.length) {
      combined.push(array1[i]);
      i++;
    }
    while (j < array2.length) {
      combined.push(array2[j]);
      j++;
    }
    //inicio del dealay para la animacion
    setTimeout(() => {
      if (combined.length == longitud) {
        temp.push(combined);
      } else {
        longitud = longitud * 2;
        setArr(flatten(temp));
        temp = [];
        temp.push(combined);
      }
    }, (combined.length / 2) * 50);

    if (arr.length == combined.length) {
      setTimeout(() => {
        setArr(combined);
      }, (combined.length / 2) * 75);
    }
    //fin del delay para la animación

    return combined;
  }

  useEffect(() => {
    let newArray = [];
    for (let i = 0; i < 63; i++) {
      newArray.push(Math.floor(Math.random() * 20));
    }
    setArr([...newArray]);
  }, [change]);

  function mergeSort(array) {
    if (array.length === 1) return array;

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }

  return (
    <>
      <div className="cubes m-top">
        {arr.length &&
          arr.map((element, i) => (
            <GiBranchArrow
              style={{
                height: `${10 * element}px`,
                width: `calc(100% / ${arr.length})`,
                margin: '0 0.5px'
              }}
              key={i + 'lol'}
              className={`line`}
            />
          ))}
      </div>
      <section className='s-around'>
        <button
          onClick={e => {
            mergeSort(arr);
          }}
        >
          Ordenar
        </button>
        <button
          onClick={e => {
            setChange(!change);
          }}
        >
          Generar
        </button>
      </section>
    </>
  );
}
