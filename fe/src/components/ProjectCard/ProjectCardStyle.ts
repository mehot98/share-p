import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding: 24px 24px;
  row-gap: 36px;
  border-radius: 3px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
  cursor: pointer;
`;

export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;
export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
`;

export const StyledText = styled.span<{
  color?: string;
  fontSize?: number;
  fontWeight?: number;
}>`
  color: ${props => props.color};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '14px')};
  font-weight: ${props => (props.fontWeight ? `${props.fontWeight}` : '400')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
