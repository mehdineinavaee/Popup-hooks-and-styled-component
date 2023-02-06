import React, { useState, useEffect } from "react";
import { getSteps } from "../services/popup-data";
import Modal from "./modal";
import {
  BackgroundCounter,
  PopupBtn,
  PopupStyle,
  PopupInner,
  CircleIcon,
} from "./styled-components/popup";

const Popup = () => {
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState([]);
  const [counter, setCounter] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const [statusModal, setStatusModal] = useState(false);

  useEffect(() => {
    setSteps([...getSteps()]);
  }, []);

  useEffect(() => {
    if (counter <= Object.keys(steps).length) {
      const filter = steps.filter((m) => m._id === counter);
      if (filter.length != 0) {
        setStep([...step, filter[0]]);
      }
    } else {
      //   console.log("Finish the steps");
      setTrigger(false);
      setStatusModal(true);
    }
  }, [counter]); // if the counter changed

  const handleIncrement = () => {
    setCounter(counter + 1);
    setTrigger(true);
  };

  const formatcounter = () => {
    return counter === 0 ? "Zero" : counter;
  };

  return (
    <>
      <h2>
        {counter === 0 ? (
          <BackgroundCounter bg="#ffc107">{formatcounter()}</BackgroundCounter>
        ) : (
          <BackgroundCounter bg="#0d6efd">{formatcounter()}</BackgroundCounter>
        )}
      </h2>
      <PopupBtn disabled={!trigger && counter != 0} onClick={handleIncrement}>
        <i className="fa fa-plus"></i>
      </PopupBtn>
      {trigger ? (
        step.map((item, index) => (
          <PopupStyle id={item._id} key={index}>
            <PopupInner>
              <div className="d-flex" style={{ marginTop: "10px" }}>
                <CircleIcon>{item._id}</CircleIcon>
                <div>
                  <h4 className="PoppinsLatin-Black">{item.title}</h4>
                </div>
              </div>
              <p className="mt-3">{item.content}</p>
            </PopupInner>
          </PopupStyle>
        ))
      ) : counter != 0 ? (
        statusModal && <Modal />
      ) : (
        <span>Please click on the button</span>
      )}
    </>
  );
};

export default Popup;
