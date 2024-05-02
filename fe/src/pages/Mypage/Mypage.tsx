import { NoneSideBarLayout } from '@/layouts';
import * as S from './MypageStyle';
import * as G from '@/styles';
import { GalleryGridWrapper, UserImg } from '@/components';
import ProjectGridWrapper from '@/components/ProjectGridWrapper/ProjectGridWrapper';

//DUMMY
import UIMG from '@/assets/imgs/youjack.png';
import JD from '@/assets/imgs/jdragon.png';
import Grass from '@/components/Grass/Grass';

const issueList = [
  ...Array.from({ length: 7 }, (_, index) => ({
    id: `${index + 1} 페이지`,
    title: 'SCREEN',
    bio: 'Lorem ipsum',
    imgs: [UIMG, JD],
    createdAt: '2024.04.27',
  })),
];

export default function Mypage() {
  return (
    <>
      <NoneSideBarLayout>
        <S.Wrapper>
          <S.HeaderWrapper>
            <S.ProfileWrapper>
              <UserImg size="lg" path={UIMG} />
              <S.ProfileTextWrapper>
                <S.Font $size="24px" $weight="600">
                  유재건
                </S.Font>

                <S.Font $size="16px" $weight="400" style={{ color: `${G.PALETTE.LIGHT_BLACK}` }}>
                  @jackU
                </S.Font>
              </S.ProfileTextWrapper>
            </S.ProfileWrapper>
            <S.GrassWrapper>
              <Grass />
            </S.GrassWrapper>
          </S.HeaderWrapper>
          <ProjectGridWrapper issueList={issueList}></ProjectGridWrapper>
          {/* <GallPreryGridWrapper issueList={issueList}></GallPreryGridWrapper> */}
          {/* <ProjectGridWrapper>
            <div>dd</div>
            <div>dd</div>
            <div>dd</div>
          </ProjectGridWrapper> */}
        </S.Wrapper>
      </NoneSideBarLayout>
    </>
  );
}
