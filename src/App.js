import React from "react";
import "./styles.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [fork, setFork] = useState(false);
  const [userobj, setUserobj] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user) return;
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${user}/repos`
        );
        const data = await response.json();
        setUserobj(data);
      } catch (error) {
        return <h1>Not Found</h1>;
      }
    }
    fetchData();
  };

  return (
    <div className="App">
      <div className="input">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Github username: </label>
          <input
            id="username"
            type="text"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <label htmlFor="fork">Include forks: </label>
          <input
            id="fork"
            type="checkbox"
            onChange={() => {
              setFork(!fork);
            }}
          />
          <button type="submit" disabled={!user}>
            Submit
          </button>
        </form>
      </div>
      <section>
        <header>
          <div className="col">Name</div>
          <div className="col">Language</div>
          <div className="col">Description</div>
          <div className="col">Size</div>
        </header>

        {userobj &&
          userobj
            .filter((item) => item.fork === fork)
            .map((item) => {
              return (
                <div key={item.id}>
                  <div className="col">{item.name}</div>
                  <div className="col">{item.language}</div>
                  <div className="col">{item.description}</div>
                  <div className="col">{item.size}</div>
                </div>
              );
            })
            .sort((a, b) => {
              return (
                b.props.children[3].props.children -
                a.props.children[3].props.children
              );
            })}
      </section>
    </div>
  );
}

export default App;
