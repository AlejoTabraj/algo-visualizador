import './App.css';
import { BubleSortBarras } from './components/Algos/bubleSort/BubleSortBarras';
import { BubleSortCircle } from './components/Algos/bubleSort/BubleSortCircle';
import { NavBar } from './components/sections/NavBar';

function App() {
  return (
    <main>
      <NavBar />
      <BubleSortCircle />
      <BubleSortBarras />

    </main>
  );
}

export default App;
