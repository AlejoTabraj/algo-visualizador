import React, {useState, useEffect} from 'react'

export const InsertionSortCircle = () => {
    const [arr, setArr] = useState([4, 3, 5, 6, 8, 2, 4]);
    const [index, setIndex] = useState();
    const time = 250
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
        <button onClick={e => insert(arr, 1)}>Ordenar</button>
        </section>
      </>
    );
}
