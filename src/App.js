import {useState} from 'react';

function App() {
  
  const [ clicks, setClicks ] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={ () => setClicks(clicks + 1) }>Clicks: {clicks}</button>
      </header>
    </div>
  );
}

export default App;
