import React from "react";
import scroll from ".././img/scroll.svg"


function Hero() {
    return (

        <section id={"hero"} className={"hero"}>

        <div lang={"en"} className={"content"}>

            <h2 data-aos={"fade-up"} data-aos-delay={"400"} className={"yellow"}>{"Hi! I'm"} <span>{"Sandrine"}</span>{", a"} <a
                    className={"fancylink"}>{"frontend developer"}</a> {"and graphic designer based out of"} <strong>{"Liège."}</strong>
            </h2>
            <p className={"yellow"}>{"Art lover, coffee enthusiast, capybara connoisseur."}</p>
        </div>
        <div className={"scrolldown"}>
            <a href={"#about"}><img src={scroll} alt="Logo" /></a>
        </div>
        <div lang={"fr"} className={"content"}>
            <h2>{"Hello! Je m'appelle"} <span>{"Sandrine"}</span>{", je suis une"} <a className={"fancylink"}>{"developpeuse front-end"}</a> {"et infographiste sur"} <strong>{"Liège"}</strong>{"."}</h2>
            <p className={"yellow"}> {"Intéressée par l'art, dépendante du café et fan des capybaras."}</p>

        </div>


    </section>

    );
}

export default Hero;