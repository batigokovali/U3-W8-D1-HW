import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Components/ButtonComponent.jsx'
import ImageComponent from './Components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonComponent btnLabel="Example"></ButtonComponent>
        <ImageComponent
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m-Q99L6x0PjE0Cqjb1kyCwHaFs%26pid%3DApi&f=1&ipt=fdbb731a7fdc06d6f5584e3156d0fda514fc39bcc34b3426bb4efe692fb7610a&ipo=images"
        alt="Evh Stripes"
        ></ImageComponent>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
