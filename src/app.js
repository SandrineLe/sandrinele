import ReactDOM from "react-dom";
import React from "react";
import "/css/style.css";



import MyNavbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
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
