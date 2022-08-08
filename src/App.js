import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <a
          href="https://github.com/MaryamNozari/weather-app-react"
          alt="github repository"
          target="_blank"
          rel="noreferrer"
        >
          github repository link
        </a>
      </div>
    </div>
  );
}
