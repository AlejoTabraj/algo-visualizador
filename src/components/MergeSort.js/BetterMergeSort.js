import React, { useState, useEffect } from 'react';
import { GiBranchArrow } from 'react-icons/gi';

export const BetterMergeSort = () => {
  const [arr, setArr] = useState([]);
  const [time, setTime] = useState(50);
  const [barras, setBarras] = useState(63);
  const [finish, setFinish] = useState(false);
  const [dis, setDis] = useState(false)

  function animaciones(array) {
    const animations = [];
    if (array.length <= 1) {
      return array;
    }
    const auxiliaryArray = array.slice();
 betterMergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }

  function betterMergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
 betterMergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
 betterMergeSortHelper(
      auxiliaryArray,
      middleIdx + 1,
      endIdx,
      mainArray,
      animations
    );
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }

  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  const betterMergeSort = () => {
    const animations = animaciones(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('line1');
      if(!arrayBars) break
      const isColorChange = i % 3 !== 2;
      if (isColorChange && arrayBars) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? '#e70707' : null;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * time);
      } else {
        setTimeout(() => {
            if(arrayBars){
                
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight * 10}px`;
            }
        }, i * time);
      }
    }
  };

  useEffect(() => {
    let newArray = [];
    for (let i = 0; i < barras; i++) {
      newArray.push(Math.floor(Math.random() * 20));
    }
    setArr([...newArray]);
  }, [barras]);

  return (
    <>
      <div className="cubes">
        {arr.length &&
          arr.map((element, i) => (
            <GiBranchArrow
              style={{
                height: `${element * 10}px`,
                width: `calc(100% / ${arr.length})`,
                margin: '0 0.5px'
              }}
              key={i + 'lol'}
              className={`${finish ? 'select2' : null} line1`}
            />
          ))}
      </div>
      <section>
        <button
        disabled={dis}
          onClick={e => {
         setDis(!dis)
         betterMergeSort();
          }}
        >
          Ordenar
        </button>
        <input
          disabled={dis}
          type="range"
          onChange={e => setTime(e.target.value)}
          min="1"
          max="100"
          value={time}
        />
        <input
        disabled={dis}
          type="range"
          value={barras}
          min="20"
          max="150"
          onChange={e => setBarras(e.target.value)}
        />
      </section>
    </>
  );
}
