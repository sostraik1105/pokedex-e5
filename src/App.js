import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom'
import { Access } from './components/pages/Access';
import { Pokemons } from './components/pages/PokeList/Pokemons';
import ProtectedRoutes from './components/ProtectedRoutes';
import { PokeInfo } from './components/pages/PokeInfo/PokeInfo';

function App() {
  return (
    <HashRouter>
      <div className="App">
        

        <Routes>
          <Route path="/" element={<Access />}/>
            
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokemon" element={<Pokemons />}/>
            <Route path="/pokemon/:id" element={<PokeInfo />} />
          </Route>

        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
