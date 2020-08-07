import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeContainer'
import TopLeftTitle from './Components/TopLeftTitle'

function App() {
  return (
    <div className="App">
      <TopLeftTitle />
      
      <HomeContainer />
    </div>
  );
}

export default App;
