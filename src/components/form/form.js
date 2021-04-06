import React, { Component } from "react";
import { connect } from "react-redux";
import { addRequest } from "../../actions";
import axios from "axios";
import ToTop from "../../assets/img/arrowDown.svg";
import { useForm } from "react-hook-form";
import { Text } from "../../containers/languages";
import "./styles.css";

const Login = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => props.addRequest(data);
  return (
    <section className="form" id="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>
          <Text tid="formtitle" />
        </h1>
        <div className="form_group">
          <span />
          <input
            className="formInput"
            id="fio"
            type="text"
            placeholder="Ф.И.О.*"
            required
            {...register("name")}
          />
        </div>
        <div className="form_group">
          <span />
          <input
            className="formInput"
            type="email"
            placeholder="Почта*"
            required
            {...register("email")}
          />
        </div>
        <div className="form_group">
          <span />
          <input
            className="formInput"
            type="number"
            placeholder="Телефон*"
            required
            {...register("number")}
          />
        </div>
        <div className="form_group">
          <span />
          <input
            className="formInput"
            type="text"
            placeholder="Компания*"
            required
            {...register("company")}
          />
        </div>
        <p>
          <Text tid="formparagraph" />
        </p>
        <div className="form-btn">
          <div className="form-btn">
            <button type="submit">
              <Text tid="formbtn" />
            </button>
          </div>
        </div>
      </form>
      <a href="#header" className="toTopBtn">
        <img src={ToTop} alt="ToTop" />
      </a>
    </section>
  );
};

export default connect(null, { addRequest })(Login);
