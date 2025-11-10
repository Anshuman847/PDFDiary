import logo from './logo.svg';
import './App.css';
import MergePDF from './components/MergePDF'; // 👈 import your PDF tool

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* 👇 PDF Tool Section */}
      <section style={{ marginTop: "2rem", textAlign: "center" }}>
        <h2>📘 PDFDiary Tools</h2>
        <MergePDF />
      </section>
    </div>
  );
}

export default App;
