import React, {useEffect, useState} from 'react'
import { GiBranchArrow } from 'react-icons/gi'

export const BubleSortBarras = () => {
    const [arr, setArr] = useState([4, 3, 5, 6, 8, 2, 4]);
    const [index, setIndex] = useState();
    const [range, setRange] = useState(20)
    const [lines, setLines] = useState(60)
    const [reload, setReload] = useState(false)
    const [dis, setDis] = useState(false)
  
    function buble(array, i = 0) {
      if (i == array.length) return null;
      function insideBuble(arr, j = 0) {
        if (j == arr.length) return setDis(!dis);
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
        }, range);
      }
      insideBuble(array);
      return setTimeout(() => {
        buble(array, i + 1);
      }, ((array.length * 1.4) * range));
    }
  
    useEffect(() => {
      let newArray = [];
      for (let i = 0; i < lines; i++) {
        newArray.push(Math.floor(Math.random() * 20));
      }
      setArr([...newArray]);
    }, [lines]);
  
    return (
      <>
        <div className="cubes">
          {arr &&
            arr.map((element, i) => (
              <GiBranchArrow
                style={{
                  height: `${10 * element}px`,
                  width: `calc(100% / ${lines})`,
                  margin: '0 0.5px'
                }}
                key={i + 'lol'}
                className={`${i == index ? 'select' : null} ${
                  i == index + 1 ? 'select2' : null
                } line`}
              />
            ))}
        </div>
        <section>
        <button disabled={dis} onClick={e => { buble(arr); setDis(true)}}>Ordenar</button>
        <input disabled={dis} desctivado type='range' value={range} min={1} max={150} onChange={e=> setRange(e.target.value)}/>
        
        <input disabled={dis} desctivado type='range' min={5} max={60} value={lines} onChange={e => setLines(e.target.value)} />
        <button  onClick={ e => window.location.reload(!reload)}> Recargar </button>
        </section>
      </>
    );
}
