import Home from './Home';

function App() {
  const title = 'Welcome to the Punk Brewery!'
  return (
    <div className="App">
      <h1>{ title }</h1>
      <Home />
    </div>
  );
}

export default App;