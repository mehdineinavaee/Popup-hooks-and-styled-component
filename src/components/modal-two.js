import React from "react";
import Input from "./common/input";
import { Parent, Child } from "./styled-components/modal";

const ModalTwo = () => {
  return (
    <>
      <div className="title">
        <p>Please specify the interaction period choice</p>
      </div>
      <div className="modal-content">
        <Parent>
          <Child>Yes </Child>
          <Child>
            <i className="fa fa-arrow-right"></i>
          </Child>
          <Child>Keep it on the duration</Child>
          <Child style={{ width: "100%" }}>
            {/* <input type="text" className="form-control" /> */}
            <Input id="txt1" name="txt1" />
          </Child>
        </Parent>
        <Parent>
          <Child>No </Child>
          <Child>
            <i className="fa fa-arrow-right"></i>
          </Child>
          <Child>Reapeat after</Child>
          <Child style={{ width: "100%" }}>
            <Input id="txt2" name="txt2" />
          </Child>
        </Parent>
      </div>
    </>
  );
};

export default ModalTwo;
