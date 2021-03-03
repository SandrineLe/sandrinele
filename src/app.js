import ReactDOM from "react-dom";
import React from "react";
import "./css/style.scss";
import "./css/kursor.css";
import "bulma";


import MyNavbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";


function App() {
    return (
        <>
        <header>
            <MyNavbar />
        </header>
        <main>
             <Hero />
             <About />
             <Projects />          
        </main>
      <footer>
            <Footer />
        </footer>
        </>

    );
}

ReactDOM.render(<App />, document.querySelector("#app"));
