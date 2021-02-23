import React from "react";

function Footer() {
    return (
       <section>
        <div className={"has-text-centered"}>
        <p>
          <a className={"is-size-3"} href={"https://github.com/SandrineLe/"}><i className={"fab fa-github m-2 has-text-white"}></i></a>  <a className={"is-size-3"} href={"https://www.behance.net/sandrinee"}><i className={"fab fa-behance m-2 has-text-white"}></i></a>  <a className={"is-size-3"} href={"#"}><i className={"fab fa-linkedin-in m-2 has-text-white"}></i></a>
        </p>
        <p className={"has-text-white"}>
            {"PERSONAL PORTFOLIO BY SANDRINE LE (2021)"}
        </p>
      </div>
      </section>

    );
}

export default Footer;