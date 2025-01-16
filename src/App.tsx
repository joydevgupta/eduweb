import React from "react";
import "./App.css";

function App() {
  return (
    <div id="root">
      <header>
        <img src="/vite.svg" className="logo" alt="Edufinite Logo" />
      </header>
      <main>
        <div className="card">
          <h1>Welcome to Edufinite</h1>
          <p>Your personalized online tutoring platform.</p>
          <button>Get Started</button>
        </div>
        <div className="card">
          <h2>About Us</h2>
          <p>
            Edufinite helps students achieve their goals with expert tutors and
            customized learning plans.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
