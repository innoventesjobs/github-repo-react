import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <label htmlFor="username">Github username: </label>
        <input id="username" type="text" />
        <label htmlFor="fork">Include forks: </label>
        <input id="fork" type="checkbox" />
        <div><button>Submit</button></div>
      </div>
      <section>
        <header>
          <div className="col">Name</div>
          <div className="col">Language</div>
          <div className="col">Description</div>
          <div className="col">Size</div>
        </header>
        <div>
          <div className="col">C1</div>
          <div className="col">C2</div>
          <div className="col">C3</div>
          <div className="col">C4</div>
        </div>
      </section>
      <div className="error">Dummy error</div>
    </div>
  );
}

export default App;