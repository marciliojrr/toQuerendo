import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 17px 20px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  color: #f4f4f4;
  background-color: #003f62;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #004f62;
    transition: all 0.3s ease;
  }
`;
