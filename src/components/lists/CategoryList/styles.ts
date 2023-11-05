import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
`;

export const Item = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 10px;
  gap: 25px;
  text-decoration: none;
  background-color: #ffff;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 0.3s ease;
  }
`;

export const Image = styled.img``;

export const Description = styled.p`
  font-weight: bold;
  color: #999;
`;
