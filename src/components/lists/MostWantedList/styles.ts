import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 15px;
  width: 100%;
`;

export const Item = styled.a`
  text-decoration: none;
  border-radius: 10px;
  width: calc(33% - 15px);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
`;
