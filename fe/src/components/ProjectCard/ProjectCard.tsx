import React from 'react';
import * as S from './ProjectCardStyle';
import * as T from '@/types';
import { PALETTE } from '@/styles';
import { UserImg } from '..';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ title, bio, accounts, add, id }: T.ProjectCardProps) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    if (id !== '0') {
      navigate(`/projects/${id}`);
    }
  };

  return (
    <S.Card className="hover-moving" onClick={handleCardClick}>
      <S.CardTextWrapper>
        <S.StyledText color={PALETTE.SUB_BLACK} fontWeight={700} fontSize={20} $add={add}>
          {title}
        </S.StyledText>
        {!add ? (
          <S.StyledText color={PALETTE.LIGHT_BLACK} fontWeight={500} fontSize={14}>
            {bio}
          </S.StyledText>
        ) : (
          <S.AddWrapper>
            <Plus size={18} color={PALETTE.LIGHT_BLACK} />
            <S.StyledText color={PALETTE.LIGHT_BLACK} fontWeight={500} fontSize={14}>
              {bio}
            </S.StyledText>
          </S.AddWrapper>
        )}
      </S.CardTextWrapper>
      {!add ? (
        <S.ImgWrapper>
          {accounts?.map((img: any, idx) => (
            <UserImg size="sm" path={img.imageUrl} key={idx} />
          ))}
        </S.ImgWrapper>
      ) : (
        <div style={{ width: '32px', height: '32px', visibility: 'hidden' }}>hello</div>
      )}
    </S.Card>
  );
}
