import React from 'react';
import * as S from './FeatureManualStyle';
import * as Comp from '@components';
import * as L from '@layouts';

export default function FeatureManual() {
  return (
    <L.SideBarLayout>
      <Comp.ManualTable
        columnTitles={FEATURE_MANUAL_COLUMN_TITLES}
        dataList={FEATURE_MANUAL_DUMMY}
        usingFor="FEATURE"
      />
      <Comp.ManualTable columnTitles={API_MANUAL_COLUMN_TITLES} dataList={API_MANUAL_DUMMY} usingFor="API" />
    </L.SideBarLayout>
  );
}

const FEATURE_MANUAL_COLUMN_TITLES: {
  name: string;
  celType: 'TEXT' | 'SELECT';
  iconName: 'current-state-title' | 'main-title-icon' | 'text-content-title';
  fixedWidth: string;
}[] = [
  { name: '요구사항명', celType: 'TEXT', iconName: 'main-title-icon', fixedWidth: '200px' },
  { name: '기능명', celType: 'TEXT', iconName: 'current-state-title', fixedWidth: '200px' },
  { name: '우선순위', celType: 'SELECT', iconName: 'main-title-icon', fixedWidth: '120px' },
  { name: '사용할 화면', celType: 'TEXT', iconName: 'current-state-title', fixedWidth: '200px' },
  { name: '상세 기능', celType: 'TEXT', iconName: 'current-state-title', fixedWidth: '312px' },
  { name: '진행 상태', celType: 'SELECT', iconName: 'current-state-title', fixedWidth: '120px' },
  { name: '담당자', celType: 'SELECT', iconName: 'text-content-title', fixedWidth: '160px' },
  { name: '시작 날짜', celType: 'TEXT', iconName: 'text-content-title', fixedWidth: '160px' },
  { name: '종료 날짜', celType: 'TEXT', iconName: 'text-content-title', fixedWidth: '160px' },
];
const FEATURE_MANUAL_DUMMY = [
  {
    requestName: '요구사항명 - 0',
    functionName: '기능명 - 0',
    priority: 'HIGH', //
    willUsingScreen: '사용할 화면 - 0',
    detail: '상세 기능 - 0',
    state: 'DONE', // YET, NOW, DONE
    assignees: '담당자 - 0', //
    startedDate: '시작 날짜 - 0',
    endedDate: '종료 날짜 - 0',
  },
  {
    requestName: '요구사항명 - 1',
    functionName: '기능명 - 1',
    priority: 'MEDIUM', //
    willUsingScreen: '사용할 화면 - 1',
    detail: '상세 기능 - 1',
    state: 'YET', //
    assignees: '담당자 - 1', //
    startedDate: '시작 날짜 - 1',
    endedDate: '종료 날짜 - 1',
  },
  {
    requestName: '요구사항명 - 2',
    functionName: '기능명 - 2',
    priority: 'MEDIUM', //
    willUsingScreen: '사용할 화면 - 2',
    detail: '상세 기능 - 2',
    state: 'NOW', //
    assignees: '담당자 - 2', //
    startedDate: '시작 날짜 - 2',
    endedDate: '종료 날짜 - 2',
  },
  {
    requestName: '요구사항명 - 3',
    functionName: '기능명 - 3',
    priority: 'LOW', //
    willUsingScreen: '사용할 화면 - 3',
    detail: '상세 기능 - 3',
    state: 'YET', //
    assignees: '담당자 - 3', //
    startedDate: '시작 날짜 - 3',
    endedDate: '종료 날짜 - 3',
  },
];

const API_MANUAL_COLUMN_TITLES: {
  name: string;
  celType: 'TEXT' | 'SELECT';
  iconName: 'current-state-title' | 'main-title-icon' | 'text-content-title';
  fixedWidth: string;
}[] = [
  { name: '분류', celType: 'TEXT', iconName: 'main-title-icon', fixedWidth: '200px' },
  { name: '진행 상태', celType: 'SELECT', iconName: 'current-state-title', fixedWidth: '120x' },
  { name: '메소드', celType: 'SELECT', iconName: 'main-title-icon', fixedWidth: '120px' },
  { name: '요청 경로', celType: 'TEXT', iconName: 'text-content-title', fixedWidth: '200px' },
  { name: '상세 설명', celType: 'TEXT', iconName: 'text-content-title', fixedWidth: '312px' },
  { name: 'Request Body', celType: 'TEXT', iconName: 'text-content-title', fixedWidth: '160px' },
  { name: 'Response Body', celType: 'TEXT', iconName: 'text-content-title', fixedWidth: '160px' },
  { name: 'BE 구현 상태', celType: 'TEXT', iconName: 'current-state-title', fixedWidth: '120px' },
  { name: 'FE 구현 상태', celType: 'TEXT', iconName: 'current-state-title', fixedWidth: '120px' },
  { name: '담당자', celType: 'SELECT', iconName: 'text-content-title', fixedWidth: '160px' },
];

const API_MANUAL_DUMMY = [
  {
    category: '요구사항명 - 0',
    state: 'DONE',
    method: 'GET',
    apiPath: 'api/member/test/1-0', //
    detail: '상세 설명 - 0',
    requestBody: 'Request Body - 0',
    responseBody: 'Response Body - 0',
    beState: '완료',
    feState: '완료',
    assignees: '담당자 - 0', //
  },
  {
    category: '요구사항명 - 1',
    state: 'YET',
    method: 'DELETE',
    apiPath: 'api/member/test/1-1', //
    detail: '상세 설명 - 1',
    requestBody: 'Request Body - 1',
    responseBody: 'Response Body - 1',
    beState: '미완료',
    feState: '미완료',
    assignees: '담당자 - 1', //
  },
  {
    category: '요구사항명 - 2',
    state: 'NOW',
    method: 'POST',
    apiPath: 'api/member/test/1-2', //
    detail: '상세 설명 - 2',
    requestBody: 'Request Body - 2',
    responseBody: 'Response Body - 2',
    beState: '완료',
    feState: '미완료',
    assignees: '담당자 - 2', //
  },
  {
    category: '요구사항명 - 3',
    state: 'DONE',
    method: 'PUT',
    apiPath: 'api/member/test/1-3', //
    detail: '상세 설명 - 3',
    requestBody: 'Request Body - 1',
    responseBody: 'Response Body - 3',
    beState: '완료',
    feState: '완료',
    assignees: '담당자 - 3', //
  },
];
