import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState("firstcard");

  return (
    <div className="App">
      <div className="container">
        {/* <header className="App-header">
        <h1 class="headerTitle-0-3-44 h3">Welcome to Uthrive!</h1>
          <div class="card-0-3-41">
            <article>
              <p className="title-0-3-40">
                know which cards are best for your purchase
              </p>
            </article>
          </div>
        </header>
        <button className='first-card'>Chase Freedom Card</button>
        <button className='second-card'>Discover Student Card</button>
        <button className='third-card'>Capital One Card</button> */}
        <button onClick={() => {if (active == "firstcard"){
          setActive("secondcard")
          } else {
            setActive("firstcard")
          }
          }}>
          {active === "firstcard" && <img src="Plugin2.png"></img>}
          {active === "secondcard" && <img src="Plugin2.1.png"></img>}
        </button>
        <nav></nav>
      </div>
    </div>
  );
}

export default App;
