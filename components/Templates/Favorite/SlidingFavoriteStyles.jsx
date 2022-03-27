import styled from 'styled-components';

export const WrapperFavorites = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1em;
  align-items: center;
  width: calc(100% - 60px);
  max-width: 700px;
  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    width: 100%;
  }
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  border-bottom: 1px solid #f1f1f1;
  border-top: 1px solid #f1f1f1;
  height: 80vh;
  overflow-y: auto;
  margin-top: 4em;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 8px;
  }

  &::-webkit-scrollbar-button:increment,
  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;