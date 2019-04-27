import React from 'react';
import Split from './composition/Split'
// import './App.css'
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate.js';
import Counter from './state/Counter.js';
import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun'

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <div className="App">
        <HelloWorld />
        <br />
        {/* <Bomb /> */}
        <RouletteGun bulletInChamber={8}/>
      </div>
  )
}

export default App;