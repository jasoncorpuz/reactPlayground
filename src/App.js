import React from 'react';
import './App.css'
// import HelloWorld from './state-drills/HelloWorld'
// import Bomb from './state-drills/bomb'
import RouletteGun from './state-drills/RoulleteGun'





function App() {
  return (
    <main className='App'>
      {/* <HelloWorld /> */}
      <RouletteGun bulletInChamber={8}/>
    </main>
  );
}

export default App;

