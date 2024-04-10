import logo from './assets/cat_pixel.png';
import avatar from './assets/my_pixel_avatar.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="main-cloud">

          <p className="title"> kinga zawarty </p>

          <img src={avatar} className="avatar" />
          <img src={logo} className="App-logo" alt="logo" /> <br></br>


          <a href="https://containedx.itch.io/interactive-resume" target="_blank">my interactive resume</a> <br></br>
          <a href="https://www.linkedin.com/in/kinga-zawarty/" target="_blank">linkedin</a> <br></br>
          <a href="https://github.com/containedx" target="_blank">github</a> <br></br>

        </p>
      </header>
    </div>
  );
}

export default App;
