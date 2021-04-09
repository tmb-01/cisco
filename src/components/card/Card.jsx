import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const Card = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={8}>
      <FormGroup>
        <TextField
          className="point-input"
          id="filled-helperText"
          label="URL-ссылка на сайт партнера"
          helperText="Введите ссылку"
          variant="filled"
        />
        <TextField
          className="point-input"
          id="filled-helperText"
          label="Наименование точки"
          helperText="Введите новый текст"
          variant="filled"
        />
        <TextField
          className="point-input"
          id="filled-helperText"
          label="Описание"
          helperText="Введите новый текст"
          variant="filled"
        />
        <TextField
          className="point-input"
          id="filled-helperText"
          label="Телефон"
          helperText="Введите новый текст"
          variant="filled"
        />
        <TextField
          className="point-input"
          id="filled-helperText"
          label="Адрес"
          helperText="Введите новый текст"
          variant="filled"
        />
        <Button variant="contained" color="primary">
          Cохранить
        </Button>
      </FormGroup>
    </Paper>
  );
};

export default Card;
