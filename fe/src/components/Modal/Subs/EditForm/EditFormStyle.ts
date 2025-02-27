import { InputWithLabel } from '@/components';
import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const IssueTitle = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`;
export const ContentsImg = styled.div`
  display: flex;
  flex-direction: row;
  width: 64px;
  margin-bottom: 10px;
  column-gap: 10px;
  align-items: center;
  border-radius: 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const StyledText = styled.span<{ color?: string; fontSize?: number; fontWeight?: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UploadText = styled(StyledText)``;

export const UploadButton = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 2px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${UploadButton} {
    display: flex;
  }
`;

export const Preview = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const DefaultContainer = styled.div`
  border: 1px dashed ${PALETTE.LIGHT_BLACK};
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
`;

export const PreviewContainer = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  &:hover ${UploadButton} {
    display: flex;
  }
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const StyledInput = styled(InputWithLabel.Input)<{ $icon?: boolean }>`
  display: flex;
  padding: 10px 14px;
  padding-left: ${({ $icon }) => ($icon ? '30px' : '10px')};
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${PALETTE.NO_GRASS};
  background: ${PALETTE.MAIN_WHITE};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  font-size: 12px;
  width: 100%;
  &:focus {
    box-shadow: rgba(46, 184, 114, 0.05) 0px 6px 24px 0px, rgba(46, 184, 114, 0.08) 0px 0px 0px 3px;
  }
`;

export const IssueBadge = styled.div`
  display: flex;
  background-color: ${PALETTE.MAIN_COLOR};
  border-radius: 6px;
  padding: 2px 6px;
`;
