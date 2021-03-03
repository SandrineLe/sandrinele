import React from "react";
import { ReactComponent as Scroll } from '../img/scroll.svg'





function Hero() {
    return (

        <section id={"hero"} className={"hero"}>

        <div lang={"en"} className={"content"}>

            <h2 data-aos={"fade-up"} data-aos-delay={"400"} className={"yellow"}>{"Hi! I'm"} <span>{"Sandrine"}</span>{", a"} <a
                    className={"fancylink"}>{"web developer"}</a> {"and graphic designer based out of"} <strong>{"Liège."}</strong>
            </h2>
            <p data-aos={"zoom-in"} data-aos-delay={"400"} className={"yellow"}>{"Art lover, coffee enthusiast, capybara connoisseur."}</p>
        </div>
        <div className={"scrolldown"}>
         <a href={"#about"}>
             <Scroll /></a>   </div>



    </section>

    );
}

export default Hero;