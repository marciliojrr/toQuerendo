import styled from 'styled-components';

// Define os estilos dos componentes
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  transition: transform 1.5s;
`;

export const Image = styled.img`
  width: 100%;
  transition: transform 1.5s, opacity 1.5s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

  // Remove o efeito de desfoque
  filter: none;

  // Adiciona um efeito de transição suave ao mudar de imagem
  &.enter {
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  &.enter.to {
    transform: translate(0, 0);
    opacity: 1;
  }

  &.leave {
    transform: translate(0, 0);
    opacity: 1;
  }

  &.leave.to {
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  // Adiciona uma transição de entrada e saída às imagens
  &.enter {
    animation: fadeIn 0.3s linear;
  }

  &.leave {
    animation: fadeOut 0.3s linear;
  }

  @keyframes fadeIn {
     from {
       opacity: 0;
       transform: scale(0.8);
     }
     to {
       opacity: 1;
       transform: scale(1);
     }
   }

   @keyframes fadeOut {
     from {
       opacity: 1;
       transform: scale(1);
     }
     to {
       opacity: 0;
       transform: scale(0.8);
     }
   }
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0 20px;
`;
