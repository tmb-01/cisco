import React from "react";
import Logo from "../../assets/img/logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Text } from "../../containers/languages";
import LanguageSelector from "../languageSelector/index";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import "./styles.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const Navbar2 = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className="navbar-link-media-box">
          <a className="navbar-link-media" href="#forYourBusiness">
            <Text tid="navbarForBusinessText" />
          </a>
          <a className="navbar-link-media" href="#forYourBusiness">
            <Text tid="navbarModelsText" />
          </a>
          <a className="navbar-link-media" href="#forYourBusiness">
            <Text tid="navbarContactText" />
          </a>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="button" onClick={toggleDrawer(anchor, true)}>
            <i className="fas fa-bars" onClick={toggleDrawer(anchor, true)}></i>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

const Navbar1 = () => {
  return (
    <Navbar
      className="navbar"
      id="header"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand className="navbar-brand" href="#home">
        <img src={Logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        className="navbar-toggle"
        aria-controls="responsive-navbar-nav"
      />

      <Navbar.Collapse className="navbar-collapse" id="responsive-navbar-nav">
        <Nav className="navbar-nav">
          <Nav.Link className="navbar-link" href="#forYourBusiness">
            <Text tid="navbarForBusinessText" />
          </Nav.Link>
          <Nav.Link className="navbar-link" href="#models">
            <Text tid="navbarModelsText" />
          </Nav.Link>
          <Nav.Link className="navbar-link" href="#footer">
            <Text tid="navbarContactText" />
          </Nav.Link>
          <LanguageSelector />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Navbar3 = () => {
  const matches = useMediaQuery("(min-width:992px)");
  return <>{matches ? <Navbar1 /> : <Navbar2 />}</>;
};

export default Navbar3;

// import React from 'react';
// import './styles.css';

// import Logo from '../../assets/img/logo.svg'

// const Navbar = () => {
//   return(

// <nav>
//   <input type="checkbox" id="check" />
//     <label for="check" className="checkbtn">
//       <i className="fas fa-bars"></i>
//     </label>
//   <div className="logo">
//     <a href="#">
//       <img src={Logo} alt="Logo" />
//     </a>
//   </div>
//   <ul>
//     <li><a href="#forYourBusiness">Для вашего бизнеса</a></li>
//     <li><a href="#models">Модели</a></li>
//     <li><a href="#footer">Контакты</a></li>
//   </ul>
// </nav>

// <div id="header" className="header">
//     <div className="container">
//       <div className="logo">
//         <a href="#">
//           <img src={Logo} alt="Logo" />
//         </a>
//       </div>
//       <div className="navbar-links">
//         <nav>
//           <a href="#forYourBusiness">Для вашего бизнеса</a>
//           <a href="#models">Модели</a>
//           <a href="#footer">Контакты</a>
//         </nav>
//         <div className="menuIcon">
//           <span />
//           <span />
//           <span />
//         </div>
//       </div>
//     </div>
//   </div>

//   )
// }
// export default Navbar;
