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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  width: calc(33% - 15px);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #a3a3a3;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 0.3s ease;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const ContentImage = styled.div`
  border-radius: 50%;
  border: 2px solid #003f62;
  border-style: dashed;
  padding: 5px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
`;

export const UserName = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

export const Comment = styled.p`
  padding: 10px;
  border-radius: 10px;
  background-color: #e3e3e3;
`;
