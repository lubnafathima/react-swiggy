import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <header>
      <img src="" alt="" />
      <nav></nav>
    </header>
  );
};

const Main = () => {
  return <main>
    <Header />
  </main>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);
