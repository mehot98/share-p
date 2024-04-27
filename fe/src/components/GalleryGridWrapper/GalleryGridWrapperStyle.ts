import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${PALETTE.MAIN_WHITE};
  border-radius: 24px;
  padding: 16px;
  gap: 20px;
`;

export const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-items: center;
  gap: 50px;
  padding: 24px 16px;
`;
