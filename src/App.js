import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/MaryamNozari/weather-app-react"
            alt="github repository"
            target="_blank"
            rel="noreferrer"
            className="link-repo"
          >
            github repository link
          </a>
        </footer>
      </div>
    </div>
  );
}
