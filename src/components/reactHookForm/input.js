import React from "react";
import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "../../components/Error/Error";
function Input(props) {
  const { name, type, errors, label } = props;
  const { field, meta } = useController(props);

  return (
    <div>
      {console.log(meta)}
      <TextField {...field} type={type} label={label} />
      {/* <p>{meta.invalid && meta.invalid.message}</p> */}
      <ErrorMessage name={name} errors={errors} as={<Error />} />
    </div>
  );
}

export default Input;
