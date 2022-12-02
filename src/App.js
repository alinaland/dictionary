import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Hello</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project is coded by Alina Ananyeva and is open-sourced
          </small>
        </footer>
      </div>
    </div>
  );
}
