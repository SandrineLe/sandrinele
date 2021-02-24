import React, { useState, useEffect } from "react";
import ".././css/style.css"


import coffee from ".././img/project-coffee.png"
import cmsrestaurant from ".././img/project-cms.png"
import leaf from ".././img/project-leaf.png"
import kokombe from ".././img/project-kokombe.png"
import starwars from ".././img/project-starwars.png"
import tisjart from ".././img/project-tisjart.png"
import agency from ".././img/project-agency.png"
import risingsun from ".././img/project-risingsun.png"
import pomodoro from ".././img/project-pomodoro.png"
import goutte from ".././img/project-goutte.png"
import breeze from ".././img/project-breeze.png"
import dissidentes from ".././img/project-dissidentes.png"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 307,
        overflow: "auto",
        minHeight: 340,
        margin: 8,
    },
});

const portfolio = [
    {
        name: "Coffee stories",
        photo: coffee,
        desc: "A group project in which we had to create a bulletin board, also called forum, using mainly PHP & MySQL",
        tools: "PHP - MySQL - HTML5 - Sass/Scss - Bootstrap",
        website: "https://bcbb-thewho.herokuapp.com/",
        github: "https://github.com/SandrineLe/bcbb-the-who",
        category: ["all", "website"]
    },
    {
        name: "CMS Restaurant",
        photo: cmsrestaurant,
        desc: "A group project, creation of a custom WordPress theme, respecting an existing wireframe. Use of ACF and plugins.",
        tools: "HTML - PHP - Sass/Scss - Javascript - Bootstrap - Wordpress",
        website: "http://wordpress-restaurant.herokuapp.com/",
        github: "https://github.com/JonathanMaillard/cms-restaurants",
        category: ["all", "website"]
    },
    {
        name: "Leaf",
        photo: leaf,
        desc: "Creation of a WebApp, an online IDLE Game, consisting of a REST-like API (back-end) and a React SPA (front-end).",
        tools: "Adobe XD (design) - NodeJS - React - MongoDB - Leaflet - Bulma",
        website: "#",
        github: "https://github.com/macmowl/mwenbwa",
        category: ["all", "website", "others"]
    },
    {
        name: "Interior design agency",
        photo: agency,
        desc: "Static site of a mockup based on the design made by Ramotion (Dribble).",
        tools: "HTML - CSS",
        website: "https://sandrinele.github.io/interiorlabs-clone/",
        github: "https://github.com/SandrineLe/interiorlabs-clone",
        category: ["all", "website", "others"]
    },
    {
        name: "Rising Sun Characters",
        photo: risingsun,
        desc: "Creating a website where the characters of Rising Sun (gameboard) are listed and filtered, based on the artworks of Adrian Smith.",
        tools: "HTML - CSS - Javascript - Isotope (lib)",
        website: "https://sandrinele.github.io/risingsun-filter/",
        github: "https://github.com/SandrineLe/risingsun-filter",
        category: ["all", "website", "others"]
    },
    {
        name: "Pomodoro",
        photo: pomodoro,
        desc: "Creating a simple Pomodoro timer with React.",
        tools: "HTML - CSS - React - SCSS - Parcel - ESlint ",
        website: "https://pink-pomodoro.netlify.app/",
        github: "https://github.com/SandrineLe/pomodoro",
        category: ["all", "others", "website"]
    },
    {
        name: "La goutte de trop",
        photo: goutte,
        desc: "Poster for a conference about the use of water and how it affects the world.",
        tools: "Adobe Photoshop",
        website: "https://images2.imgbox.com/d8/a4/NaVTiNwE_o.png",
        github: "#goutte",
        category: ["all", "others"]
    },
    {
        name: "Dissidentes",
        photo: dissidentes,
        desc: "Creating a logo for the RCAE roller club (women) of the University of Liège",
        tools: "Adobe Illustrator - Adobe Photoshop",
        website: "https://images2.imgbox.com/25/68/CskVPxFD_o.png",
        github: "#dissidentes",
        category: ["all", "branding"]
    },
    {
        name: "Tisj Art",
        photo: tisjart,
        desc: "Branding for a jewelry shop, making of their business card and bags design.",
        tools: "Adobe Illustrator - Adobe Photoshop",
        website: "#tisjartpack",
        github: "#tisjart",
        category: ["all", "branding"]
    },
    {
        name: "The Breeze",
        photo: breeze,
        desc: "Branding of a fictional restaurant, making of their ad poster and workship card.",
        tools: "Adobe Illustrator - Adobe Photoshop - Adobe InDesign",
        website: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/5b4e9590778353.5e20265b8f5b7.png",
        github: "https://www.behance.net/gallery/90778353/The-Breeze-Restaurant",
        category: ["all", "branding", "print"]
    },
    {
        name: "Kokombe",
        photo: kokombe,
        desc: "Branding of a fictional coffee brand, making of their product's packaging.",
        tools: "Adobe Illustrator - Adobe Photoshop",
        website: "https://www.behance.net/gallery/97668971/KOKOMBE-packaging",
        github: "#kokombe",
        category: ["all", "branding"]
    },
    {
        name: "Star Wars (fanmade)",
        photo: starwars,
        desc: "Personal project, print, a fanmade Star Wars poster.",
        tools: "Adobe Photoshop",
        website: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/0513a590778853.5e202c59a4bc2.png",
        category: ["all", "print"]
    }
];

function Projects() {
    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);

        const filtered = portfolio.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));
        setProjects(filtered);
    }, [filter]);


    return (
        <>
            <section id={"projects"} className={"projects"}>
                <div className={"content"}>
                    <div className="portfolio__labels">
                        <a active={filter === "all"} onClick={() => setFilter("all")}>
                            {"All"}
                        </a>
                        <a
                            active={filter === "website"}
                            onClick={() => setFilter("website")}
                        >
                            {"Webdev"}
                        </a>
                        <a
                            active={filter === "branding"}
                            onClick={() => setFilter("branding")}
                        >
                            {"Branding"}
                        </a>
                        <a
                            active={filter === "print"}
                            onClick={() => setFilter("print")}
                        >
                            {"Print"}
                        </a>
                        <a
                            active={filter === "others"}
                            onClick={() => setFilter("others")}
                        >
                            {"Others"}
                        </a>
                    </div>
                    <div className="portfolio__container">
                        {projects.map(item =>
                            item.filtered === true ? <Card className={classes.root} elevation={0}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="project"
                                        style={{height: 180}}
                                        image={item.photo}
                                        key={item.photo}
                                        loading={"lazy"}
                                    />
                                    <CardContent>

                                        <Typography gutterBottom variant="h5" component="h4">
                                            <span key={item.name}>{item.name}</span>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <span key={item.desc}>{item.desc}</span>
                                            <hr />
                                            <strong>{"Tools :"} </strong><span key={item.tools}>{item.tools}</span>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <a key={item.website} href={item.website}>
                                 <Button size="small" color="default">
                                   {"open"}
                              </Button>
                              </a>
                              <a key={item.github} href={item.github}> 
                              <Button size="small" color="default">
                                   {"details"}
                              </Button>
                              </a>
                                </CardActions>
                            </Card> : ""

                        )}

                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;