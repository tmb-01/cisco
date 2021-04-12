import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

import Paper from "@material-ui/core/Paper";
import GridComponent from "../GridComponent/GridComponent";
const AddProducts = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <GridComponent>
      <Paper elevation={8}>
        <Controller
          control={control}
          defaultValue=""
          name="location"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Адрес"
              fullWidth
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="location"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Адрес"
              fullWidth
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="location"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Адрес"
              fullWidth
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="location"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Адрес"
              fullWidth
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="location"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Адрес"
              fullWidth
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="location"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Адрес"
              fullWidth
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="location"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Адрес"
              fullWidth
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
      </Paper>
    </GridComponent>
  );
};

export default AddProducts;
