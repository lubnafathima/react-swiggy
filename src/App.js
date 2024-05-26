import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="main">
      <Header />
      <Container />
      <Footer />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
