import './App.css';
import React, { Suspense, useState } from 'react';
import TypesBar from './components/TypesBar';
import PokemonsContainer from './components/PokemonsContainer';
//import Modal from './components/modal/Modal';
import { PokemonModalProvider } from './context/PokemonModalProvider';
import Loader from './components/Loader';

function App() {
  const [type, setType] = useState('dark');

  return (
    <Suspense fallback={ <Loader /> }>
      <PokemonModalProvider>
          <div className='wrapper'>
            <h1 className='logo-pokemon'>Pokédex</h1>

            <TypesBar toggleType={ setType } />
            <PokemonsContainer type={ type } />
          </div>

      </PokemonModalProvider>
    </Suspense>
  )
}

export default App
