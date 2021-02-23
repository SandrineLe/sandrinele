import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import FaceIcon from '@material-ui/icons/Face';
import CodeIcon from '@material-ui/icons/Code';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HelpIcon from '@material-ui/icons/Help';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import photoshop from ".././img/photoshop.png"
import illustrator from ".././img/illustrator.png"
import indesign from ".././img/indesign.png"
import xd from ".././img/xd.png"
import MySQL from ".././img/MySQL.png"
import bulma from ".././img/bulma.png"
import cat from ".././img/cat.gif"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '400px',
    backgroundColor: "transparent",
  },
  customTabRoot: {
    color: "white",
    backgroundColor: "transparent"
},
customTabIndicator: {
    backgroundColor: "#3D405B"
}
}));

function MyTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position={"static"} color={"transparent"} elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant={"scrollable"}
          scrollButtons={"on"}
          classes={{
            root: classes.customTabRoot,
            indicator: classes.customTabIndicator
        }}
          aria-label={"scrollable force tabs"}
        >
          <Tab label={"About me"} icon={<FaceIcon />} {...a11yProps(0)} />
          <Tab label={"Skills"} icon={<CodeIcon />} {...a11yProps(1)} />
          <Tab label={"Hobbys"} icon={<FavoriteIcon />} {...a11yProps(2)} />
          <Tab label={"Trivia"} icon={<HelpIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className={"tab-content selfintro"}>
                    <p lang={"en"} className={"green"}>{"Hi! My name is"} <a>{"Sandrine Lê"}</a>{", I'm a 23 year old graphic designer and front end developer living in Liège."}
                    </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={"tab-content skills"}>
                    <div className={"columns"}>

                        <div className={"column"}>
                            <h4>{"Graphic design"}</h4>
                            <img src={photoshop} alt="Photoshop" /> <img src={illustrator} alt="Illustrator" />  <img src={indesign} alt="Indesign" />  <img src={xd} alt="XD" />
                            <h4>{"Web development"}</h4>
                            <div><p>
                                <strong>{"Languages"}</strong> {":"} <span><i className={"fab fa-html5"}></i> <i className={"fab fa-css3-alt"}></i> <i
                                    className={"fab fa-js"}></i> <i className={"fab fa-sass"}></i> <i
                                        className={"fab fa-php"}></i> <img src={MySQL} alt="" /></span>
                                <br />
                                <strong>{"Libraries"}</strong> {":"} <span><i className={"fab fa-node-js"}></i> <i className={"fab fa-react"}></i> <i
                                    className={"fab fa-bootstrap"}></i> <img
                                        src={bulma} alt="" /></span>
                            </p>
                            </div>
                        </div>

                        <div className={"column"}>
                            <h4>{"Languages"}</h4>
                            <p><strong>{"French"}</strong> {": Native"}
                                <span><strong>{"Vietnamese"}</strong> {": Bilingual"}</span>
                                <span><strong>{"English"}</strong> {": Professional working proficiency (C1)"}</span>
                                <span><strong>{"German"}</strong> {": Basic knowledges, elementary proficiency"}</span></p>

                            <h4>{"Soft skills"}</h4>
                            <p>{"Creative thinking, teamwork, adaptability, problem solving, active listening, willingness to learn "}</p>
                        </div>

                    </div>
                </div>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className={"tab-content hobbys"}>
                    <ul>
                        <li>{"Board games"}</li>
                        <li>{"Badminton"}</li>
                        <li>{"Watercolor painting"}</li>
                        <li>{"Crafting"}</li>
                        <li>{"RPG (writing / forums)"}</li>
                        <li>{"DIY"}</li>
                    </ul>
        </div>

      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className={"tab-content has-text-centered"}>
                    <p>{"What I look like when I code :"}</p>
                    <img src={cat} alt="/" />

                </div>
      </TabPanel>

    </div>
  );
}
export default MyTabs;