import React from "react";
import Checkbox from "./common/checkBox";
import { Title, ModalContent } from "./styled-components/modal";

const ModalOne = () => {
  return (
    <>
      <Title>
        <p>Please specify the period below</p>
      </Title>
      <ModalContent>
        <Checkbox id="checkBoxOne" text="Interact by action" />
        <br />
        <Checkbox
          id="checkBoxTwo"
          text="Keep the interaction for a certain time"
        />
        <br />
        <Checkbox id="checkBoxThree" text="Send one time" />
      </ModalContent>
    </>
  );
};

export default ModalOne;
