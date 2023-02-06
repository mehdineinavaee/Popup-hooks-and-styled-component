import React, { useState } from "react";
import ModalOne from "./modal-one";
import ModalTwo from "./modal-two";
import ModalThree from "./modal-three";
import {
  ModalContainer,
  CloseModalBtn,
  ModalPosition,
  ModalBtn,
  RightToLeft,
  Footer,
} from "./styled-components/modal";

const Modal = () => {
  const [show, setShow] = useState(true);
  const [counter, setCounter] = useState(1);

  return (
    <>
      {show && counter <= 3 ? (
        <ModalPosition>
          <ModalContainer>
            {counter <= 2 ? (
              <RightToLeft>
                <CloseModalBtn onClick={() => setShow(false)}>
                  &times;
                </CloseModalBtn>
              </RightToLeft>
            ) : (
              ""
            )}
            {counter === 1 && <ModalOne />}
            {counter === 2 && <ModalTwo />}
            {counter === 3 && <ModalThree />}
            <Footer>
              {counter <= 2 ? (
                <ModalBtn onClick={() => setCounter(counter + 1)}>
                  Next
                </ModalBtn>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      display: "inline-block",
                      width: "540px",
                    }}
                  >
                    <ModalBtn onClick={() => setCounter(counter + 1)}>
                      Finish
                    </ModalBtn>
                  </div>
                </div>
              )}
            </Footer>
          </ModalContainer>
        </ModalPosition>
      ) : (
        <>
          <br />
          <h1 className="PoppinsLatin-Black">Finished the task</h1>
        </>
      )}
    </>
  );
};

export default Modal;
