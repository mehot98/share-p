import React from 'react';
import * as S from './ModalStyle';
import * as T from '@/types';
import * as Comp from '@/components';
import { modalDataState } from '@/stores/atoms/modal';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { useModal } from '@/customhooks';
import { X } from 'lucide-react';
import { createNewJob } from '@/apis/projects';
import { useParams } from 'react-router-dom';

export default function Modal({ modalId, title, subTitle, children, btnText }: T.ModalProps) {
  const { closeModal } = useModal(modalId);
  const { projectId } = useParams();

  const { isOpen, isValid } = useRecoilValue(modalDataState(modalId));

  const handleModalClose = () => {
    closeModal();
  };

  const handleCreateButtonClick = useRecoilCallback(({ snapshot, set }) => async () => {
    const contents = (await snapshot.getPromise(modalDataState(modalId))).contents;
    try {
      // api call
      if (contents) {
        switch (modalId) {
          case 'project':
            processProjectData(contents as T.ProjectCreationFormProps);
            break;
          case 'job':
            console.log('projectId', projectId);
            // TODO: issueId 어떻게 가지고 오나? props에 추가?
            // createNewJob(projectId,);
            break;
          case 'infra-job':
            break;
          case 'project-secretKey':
            break;
          default:
            break;
        }
      }
      console.log(contents);
      console.log(set);

      closeModal();
    } catch (error) {
      console.error(error);
    }
  });

  return isOpen ? (
    <S.ModalBackdrop onClick={handleModalClose}>
      <S.ModalWrapper onClick={e => e.stopPropagation()}>
        <S.ModalContent>
          {/* header */}
          <S.ModalHeader>
            <S.ModalHeaderContent>
              <S.ModalTitle>{title}</S.ModalTitle>
              <S.ModalSubTitle>{subTitle}</S.ModalSubTitle>
            </S.ModalHeaderContent>
            <S.CloseButton onClick={handleModalClose}>
              <X />
            </S.CloseButton>
          </S.ModalHeader>

          {/* body */}
          <S.ModalBody>{children}</S.ModalBody>

          {/* footer */}
          <S.ModalFooter>
            <S.BtnWrapper onClick={handleModalClose} $isValid={true}>
              <Comp.MainColorBtn bgc={false} disabled={false}>
                취소
              </Comp.MainColorBtn>
            </S.BtnWrapper>
            <S.BtnWrapper onClick={() => isValid && handleCreateButtonClick()} $isValid={isValid}>
              <Comp.MainColorBtn bgc={isValid} disabled={isValid}>
                {btnText ? btnText : '생성'}
              </Comp.MainColorBtn>
            </S.BtnWrapper>
          </S.ModalFooter>
        </S.ModalContent>
      </S.ModalWrapper>
    </S.ModalBackdrop>
  ) : null;
}

function processProjectData(contents: T.ProjectCreationFormProps) {
  return {
    title: contents.title,
    bio: contents.bio,
    members: contents.members.map(member => ({
      id: member.accountId,
      roles: Object.entries(member.roles)
        .filter(([_, hasRole]) => hasRole)
        .map(([role, _]) => role),
    })),
  };
}
