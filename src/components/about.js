import React from "react";

import MyTabs from "./about-tabs"


function About() {

    return (

        <section id={"about"} className={"about"}>
            <div className={"sidetextL"}>
                <p lang={"en"} className={"sidetext"}>
                    {"get to know me"}
                </p>
            </div>

            <div className={"content"}>
                <MyTabs />

            </div>

            <div className={"vertical"}>
                <p className={"sidetext"}>
                    {"intro"}
                    </p>
            </div>
            <div className={"horizontal"}>
                <hr id={"two"} data-symbol={"☉"} />
            </div>



        </section >


    );
}

export default About;