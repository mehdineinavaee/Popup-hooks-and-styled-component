import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 25px;
`;

export const CloseModalBtn = styled.button`
  font-size: 30px !important;
  color: #212529;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const Title = styled.div`
  margin-top: 40px;
`;

export const ModalPosition = styled.div`
  position: fixed;
  top: 100px;
`;

export const ModalBtn = styled.button`
  font-size: 20px;
  color: #fff;
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  margin-top: 30px;
`;

export const RightToLeft = styled.div`
  direction: rtl;
`;

export const Footer = styled.div`
  position: absolute;
  right: 30px;
  bottom: 40px;
`;

export const Parent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Child = styled.div`
  margin: 5px;
`;

export const InputModal = styled.input`
  display: block;
  width: 95%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;
