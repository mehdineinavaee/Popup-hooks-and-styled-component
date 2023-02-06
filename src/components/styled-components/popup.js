import styled from "styled-components";

export const BackgroundCounter = styled.span`
  background-color: ${(props) => props.bg};
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    color: red;
  }
`;

export const PopupBtn = styled.button`
  font-size: 20px;
  color: #fff;
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const PopupStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const PopupInner = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  width: 400px;
  max-width: 400px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(229, 252, 236, 1) 100%
  );
  border-radius: 10px;
`;

export const CircleIcon = styled.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  background: #423ffe;
  color: #fff;
  text-align: center;
  padding-top: 3px;
  margin: 0px 10px 10px 0px;
  border-radius: 50%;
`;
