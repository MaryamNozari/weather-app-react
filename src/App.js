import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by Maryam Nozari and it is {""}
          <a
            href="https://github.com/MaryamNozari/weather-app-react"
            alt="github repository"
            target="_blank"
            rel="noreferrer"
            className="link-repo"
          >
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://polite-semolina-f2255a.netlify.app/"
            alt="website-link"
            target="_blank"
            rel="noreferrer"
            className="link-netlify"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
