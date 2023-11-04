import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3.5rem;
  height: 40vh;

  background-color: #f4f4f4;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const FirstContent = styled.div``;

export const AddressText = styled.p`
  font-size: large;
  padding: 28px 0 28px 0;
  border-bottom: 1px solid #252525;
`;

export const ContentSocialMidia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 28px;
`;

export const ItemSocial = styled.a`
  color: #252525;
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: larger;
  font-weight: bold;
`;

export const ContentItems = styled.ul`
  margin-top: 16px;
`;

export const Item = styled.li`
  margin: 12px 0 12px 0;
`;

export const Link = styled.a`
  color: #252525;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.img``;
