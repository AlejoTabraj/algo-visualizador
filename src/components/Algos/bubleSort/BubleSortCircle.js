import React, {useState, useEffect} from 'react'

export const BubleSortCircle = () => {
    const [arr, setArr] = useState([4, 3, 5, 6, 8, 2, 4]);
    const [index, setIndex] = useState();

    function buble(array, i = 0) {
      if (i == array.length) return null;
  
      function insideBuble(arr, j = 0) {
        if (j == arr.length) return null;
        let temp = arr[j];
        setIndex(j);
  
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
  
        setArr([...arr]);
        return setTimeout(() => {
          insideBuble(arr, j + 1);
        }, 500);
      }
      insideBuble(array);
      return setTimeout(() => {
        buble(array, i + 1);
      }, 8 * 500);
    }
  
    return (
      <>
        <div className="cubes">
          {arr &&
            arr.map((element, i) => (
              <div
                key={i + 'lol'}
                className={`${i == index ? 'select' : null} ${
                  i == index + 1 ? 'select2' : null
                } cube`}
              >
                {element}
              </div>
            ))}
        </div>
        <section>
        <button onClick={e => buble(arr)}>Ordenar</button>
        </section>
      </>
    );
}
