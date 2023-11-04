import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: calc(25% - 15px);
  gap: 20px;
  border: 0.5px solid #989898;
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 0.3s ease;
  }
`;

export const Image = styled.img``;

export const Name = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #252525;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
`;

export const Assessment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #eead2d;
`;

export const IsFavorite = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: red;
  background-color: #e3e3e3;
`;
