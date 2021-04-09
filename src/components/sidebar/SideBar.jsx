import React from "react";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import OurShops from "../ourShops/OurShops";
import classes from "./styles.module.css";

const AdminSideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__logo}>
        <Link>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={classes.sidebar__nav}>
        <div className={classes.sidebar__title}>Home</div>
        <div className={classes.nav}>
          <Link to="/adminpanel" className={classes.active}>
            Заявки
          </Link>
          <Link to="/adminpointofsales">Точки продаж</Link>
          <Link to="/adminaddmodel">Продукция</Link>
          <Link to="/adminmediafile">Медиафайли</Link>
        </div>
      </div>
    </div>
  );
};
export default AdminSideBar;
