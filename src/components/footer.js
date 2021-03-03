import React from "react";
import { ReactComponent as Logo } from '../img/logo.svg'



function Footer() {
  return (
    <section>
      <div className={"columns is-mobile"}>
        <div className={"column has-text-centered"}>
          <p>{"Sandrine Lê"}</p>
          <span className={" "}>{"portfolio © 2021"}</span>

          <span className={"is-block m-2"}><Logo /></span>
        </div>
        <div className={"column footerSocial has-text-centered"}>
        <p>{"Social Network"}</p>
          <span>
            <a className={"is-size-5 has-text-grey is-block"} href={"https://github.com/SandrineLe/"}><i className={"fab fa-github m-2  "}></i> {"Github"}</a>
            <a className={"is-size-5  has-text-grey is-block"} href={"https://www.behance.net/sandrinee"}><i className={"fab fa-behance m-2  "}></i> {"Behance"}</a>
            <a className={"is-size-5  has-text-grey is-block"} href={"#"}><i className={"fab fa-linkedin-in m-2  "}></i> {"Linkedin"}</a>
          </span>
        </div>
        <div className={"column"}> <p>{"Contact me"}</p>
        <span className={"is-size-5   is-block"}>{"le.sandrinemt@gmail.com"}</span>
        <span className={"is-size-5   is-block"}>{"0498 11 29 27"}</span>

        </div>

      </div>
    </section>

  );
}

export default Footer;