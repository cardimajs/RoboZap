/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React,{ useState, useRef} from 'react';

import { useForm, Controller } from "react-hook-form";

import { Select, MenuItem } from "@material-ui/core";

function App() {

  const { handleSubmit, control, register } = useForm({phoneField: 'Telefone'});

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />

        <Controller
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          )}
          name="Select"
          control={control}
          defaultValue=""
        />

        <input type="submit" />
      </form>

    </>
  );
}

export default App;
