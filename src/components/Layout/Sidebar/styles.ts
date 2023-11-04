import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 30px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  gap: 8px;
  color: #f4f4f4;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    color: #878787;
    transition: all 0.3s ease;
  }
`;
