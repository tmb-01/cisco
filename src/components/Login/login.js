import React, { useState } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../actions";
import axios from "axios";
import Logo1 from "../../assets/img/logo.svg";
import LoginBanner from "../../assets/img/loginPage_banner.png";
import { useHistory } from "react-router-dom";
import "./styles.css";

const LoginPage = (props) => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      adminName: e.target.user.value,
      password: e.target.password.value,
    };
    props.userLogin(data);
    e.target.reset();
  };
  console.log(props.login.error);
  return (
    <div className="login__page">
      <div className="login_bg_image">
        <img src={LoginBanner} alt="LoginBanner" />
      </div>
      <div className="login__box" onSubmit={handleSubmit}>
        <div className="login__logo">
          <a href="/">
            <img src={Logo1} alt="Logo1" />
          </a>
        </div>
        <h1 className="login__title">Войти в систему</h1>
        <form>
          {props.login.error && (
            <p className="p-incorrect">{props.login.error.message}</p>
          )}
          <div className="form_group">
            <span></span>
            <input
              className="login_input"
              id="user"
              type="text"
              placeholder="Пользователь"
              required
              name="adminName"
            />
          </div>
          <div className="form_group">
            <span></span>
            <input
              className="login_input"
              type="password"
              placeholder="Пароль"
              required
              name="password"
            />
          </div>

          <div className="radio_group">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Запомнить меня</label>
          </div>
          <div className="loginbtn">
            <button type="submit" to="/adminpanel">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { login: state.login };
};

export default connect(mapStateToProps, { userLogin })(LoginPage);
