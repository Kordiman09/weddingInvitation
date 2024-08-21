import React from 'react';
import Hero from './components/Hero';
import Data from './components/Data';
import Columns from './components/Columns';
import Countdown from './components/Countdown';
import Description from './components/Description';
import Gallery from './components/Gallery';

import backgroundImage from '../src/assets/wedding.jpg';
import Donations from './components/Donations';

function App() {
  return (
    <div>
      <Hero />
      <Data />
      <Countdown />
      <Description />
      <Donations />
      <Gallery />
    </div>
  );
}

export default App;
