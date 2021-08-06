import './App.css';
import { BubleSortBarras } from './components/Algos/bubleSort/BubleSortBarras';
import { BubleSortCircle } from './components/Algos/bubleSort/BubleSortCircle';
import { MergeSort } from './components/MergeSort.js/MergeSort';
import { NavBar } from './components/sections/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { InsertionSort } from './components/Algos/insertSort/InsertSort';
import QuickSort from './components/quickSort/QuickSort';
import QuickSortCircle from './components/quickSort/QuickSortCircle';


function App() {
  return (
    <Router>
    <main>
      
    <NavBar />

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
         <QuickSortCircle /> 
        <QuickSort />
        </Route>
        <Route path="/insertsort">
         <InsertionSort />
        </Route>
        <Route path="/bublesort">         
         <BubleSortCircle />
        <BubleSortBarras />
        </Route>
        <Route exact path="/mergesort">
        <MergeSort />
        </Route>
      </Switch>
    </main>
  </Router>
    
  );
}

export default App;
