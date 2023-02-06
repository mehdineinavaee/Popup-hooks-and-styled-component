import React from "react";
import { InputModal } from "../styled-components/modal";

const Input = ({ id, name, placeholder }) => {
  return (
    <React.Fragment>
      <InputModal
        type="text"
        id={id}
        name={name}
        className="form-control"
        placeholder={placeholder}
      />
    </React.Fragment>
  );
};

export default Input;
