import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 50%;
`;

export const TextInput = styled.input`
  width: 30vw;
  padding: 12px;
  border-radius: 22px 0 0 22px;
  border: none;
`;

export const BtnSearch = styled.button`
  display: flex;
  justify-content: center;
  width: 6rem;
  padding: 12px;
  border-radius: 0 22px 22px 0;
  border: none;
  font-weight: bold;
  color: #f4f4f4;
  background-color: #252525;
`;
