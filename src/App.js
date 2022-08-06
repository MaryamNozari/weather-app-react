import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Hello World!!!</h1> */}
        <Search />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        {/* Learn React
        </a> */}
      </header>
      <a
        href="https://github.com/MaryamNozari/weather-app-react"
        alt="github repository"
        target="_blank"
        rel="noreferrer"
      >
        github repository link
      </a>
      {/* <h1>it is ok</h1> */}
    </div>
  );
}

export default App;
