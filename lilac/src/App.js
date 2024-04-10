import logo from './assets/cat_pixel.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="main-cloud">
          <img src={logo} className="App-logo" alt="logo" /> <br></br>
          kinga zawarty <br></br>
          <a href="https://containedx.itch.io/interactive-resume" target="_blank">my interactive resume</a> <br></br>
          <a href="https://www.linkedin.com/in/kinga-zawarty/" target="_blank">linkedin</a> <br></br>
        </p>
      </header>
    </div>
  );
}

export default App;
