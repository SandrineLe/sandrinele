import React from "react";
import logo from ".././img/logo.svg"


function Footer() {
  return (
    <section>
      <div className={"columns is-mobile"}>
        <div className={"column has-text-centered"}>
          <p>{"Sandrine Lê"}</p>
          <span className={"has-text-white"}>{"portfolio © 2021"}</span>
          <img className={"is-block"} src={logo} alt="Logo" />
        </div>
        <div className={"column footerSocial has-text-centered"}>
        <p>{"Social Network"}</p>
          <span>
            <a className={"is-size-5 has-text-white is-block"} href={"https://github.com/SandrineLe/"}><i className={"fab fa-github m-2 has-text-white"}></i> {"Github"}</a>
            <a className={"is-size-5 has-text-white is-block"} href={"https://www.behance.net/sandrinee"}><i className={"fab fa-behance m-2 has-text-white"}></i> {"Behance"}</a>
            <a className={"is-size-5 has-text-white is-block"} href={"#"}><i className={"fab fa-linkedin-in m-2 has-text-white"}></i> {"Linkedin"}</a>
          </span>
        </div>
        <div className={"column"}> <p>{"Contact me"}</p>
        <span className={"is-size-5 has-text-white is-block"}>{"le.sandrinemt@gmail.com"}</span>
        <span className={"is-size-5 has-text-white is-block"}>{"0498 11 29 27"}</span>

        </div>

      </div>
    </section>

  );
}

export default Footer;