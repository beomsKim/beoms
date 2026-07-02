// src/data/portfolioData.js
import lunchRouletteImg from "../assets/images/portfolio/lunch_roulette.png";
import myPortfolioImg from "../assets/images/portfolio/my_portfolio.png";
import s1Img from "../assets/images/portfolio/s1.jpg";
import jinrotonicImg from "../assets/images/portfolio/jinrotonic.JPG";
import daygestSunpoharaImg from "../assets/images/portfolio/daygest_sunpohara.JPG";
import shangpreeImg from "../assets/images/portfolio/shangpree.JPG";
import sportsscoreImg from "../assets/images/portfolio/sportsscore.jpg";
import pickmakerImg from "../assets/images/portfolio/pickmaker.jpg";
import ifcjImg from "../assets/images/portfolio/ifcj.jpg";
import benjaminmooreImg from "../assets/images/portfolio/benjaminmoore.jpg";
import happyfarmImg from "../assets/images/portfolio/happyfarm.jpg";
import herb_resumeImg from "../assets/images/portfolio/herb_resume.jpg";
import aphrozoneImg from "../assets/images/portfolio/aphrozone.jpg";
import atorakImg from "../assets/images/portfolio/atorak.jpg";
import rubyCellImg from "../assets/images/portfolio/ruby-cell.jpg";
import dasanImg from "../assets/images/portfolio/dasan.jpg";
import kaifImg from "../assets/images/portfolio/kaif.jpg";
import talgutImg from "../assets/images/portfolio/talgut.jpg";
import nakamuraImg from "../assets/images/portfolio/nakamura.jpg";
import taiheImg from "../assets/images/portfolio/taihe.jpg";
import urbanbrookImg from "../assets/images/portfolio/urbanbrook.jpg";
import pungmuImg from "../assets/images/portfolio/pungmu.jpg";
import smart_checkupImg from "../assets/images/portfolio/smart_checkup.jpg";
import purelandImg from "../assets/images/portfolio/pureland.jpg";
import cnfImg from "../assets/images/portfolio/cnf.jpg";
import newSeamImg from "../assets/images/portfolio/newSeam.jpg";
import laingangImg from "../assets/images/portfolio/laingang.jpg";
import SekyungImg from "../assets/images/portfolio/Sekyung.jpg";
import lalafelImg from "../assets/images/portfolio/lalafel.jpg";
import smart_motherImg from "../assets/images/portfolio/smart_mother.jpg";
import gummasterImg from "../assets/images/portfolio/gummaster.jpg";
import factnpackImg from "../assets/images/portfolio/factnpack.jpg";
import ranixImg from "../assets/images/portfolio/ranix.jpg";
import KonkukImg from "../assets/images/portfolio/Konkuk.jpg";
import vpkoreaImg from "../assets/images/portfolio/vpkorea.jpg";
import iamPlusImg from "../assets/images/portfolio/iamPlus.jpg";
import lyceumImg from "../assets/images/portfolio/lyceum.jpg";
import hiddenadImg from "../assets/images/portfolio/hiddenad.jpg";
import vizinfImg from "../assets/images/portfolio/vizinf.jpg";
import soonsungImg from "../assets/images/portfolio/soonsung.jpg";
import mjobgyImg from "../assets/images/portfolio/mjobgy.jpg";
import ganasteelImg from "../assets/images/portfolio/ganasteel.jpg";
import admonImg from "../assets/images/portfolio/admon.jpg";
import nongshimImg from "../assets/images/portfolio/nongsim.JPG";
import foodismallImg from "../assets/images/portfolio/foodsmall.JPG";
import amosImg from "../assets/images/portfolio/amospro.JPG";
import ayuncheproImg from "../assets/images/portfolio/ayunchepro.JPG";
import ayuncheImg from "../assets/images/portfolio/ayunche.JPG";
import intimeImg from "../assets/images/portfolio/pickmaker.jpg"; // 인타임도 같은 이미지 쓰더라구!
import drImg from "../assets/images/portfolio/drceviang.jpg";
import hsgImg from "../assets/images/portfolio/hsg-cloud.jpg";
import hgImg from "../assets/images/portfolio/header_gallery.png";
import nigbImg from "../assets/images/portfolio/next-image-gallery-board.png";
import sfImg from "../assets/images/portfolio/sector_flow.png";
import ourtasteImg from "../assets/images/portfolio/our_taste.png";

export const portfolioList = [
  {
    id: 117,
    category: "new",
    title: "우리의 맛지도",
    date: "2026.04 ~ 2026.06",
    contribution: "100%",
    role: "기획, 디자인, 프론트엔드 개발",
    description: "커플 전용 맛집 기록 · 공유 PWA",
    tags: ["Next.js 16", "TypeScript", "Firebase", "Zustand", "Leaflet", "PWA", "AI 활용"],
    path: "https://our-story-in-taste-mauve.vercel.app",
    isExternal: true,
    isClosed: false,
    closedMessage: `
Next.js 16(App Router) + Firebase 기반 커플 전용 맛집 기록·공유 PWA
AI(Claude)와 기획부터 배포까지 페어 프로그래밍 방식으로 풀스택 개발

사용 기술
- Frontend: Next.js 16, TypeScript, 인라인 스타일 전용 디자인 시스템
- 상태 관리: Zustand (authStore, uiStore, statsStore)
- Backend: Firebase (Auth, Firestore, Storage, FCM, Cloud Functions)
- 지도: Leaflet + Kakao Local API (장소 검색 + 자동 좌표 입력)
- 배포: Vercel (git push 자동 배포), Google Play TWA
- 개발 도구: Claude AI 페어 프로그래밍

주요 기능
- 커플 연동 시스템 (초대 코드 생성·입력, 실시간 동기화)
- 다녀온 곳 기록 (별점, 태그 39개, 이미지 최대 5장, 카카오 장소 검색)
- 재방문 감지 (동일 식당 500m 이내 자동 감지 후 방문 이력 누적)
- 위시리스트 → 다녀온 곳 이동 기능
- 커뮤니티 피드 (공유·좋아요·신고)
- Leaflet 지도 핀 → 카카오/네이버 지도 연결
- 음식 취향 분석 통계 (지역별 분포, 음식 종류)
- FCM 푸시 알림 (포그라운드 토스트 + 백그라운드 OS 알림)
- 데이터 내보내기 (CSV / 엑셀 / JSON)
- PWA 홈 화면 설치, Google Play TWA 배포

개발 과정에서 배운 점
- Firestore 실시간 구독(onSnapshot) 동시 실행 시 발생하는 INTERNAL ASSERTION FAILED 오류를 탭별 lazy 구독 패턴으로 해결
- coupleId 생성 직후 Cloud Functions 반영 전 통계가 0이 되는 문제를 authorUid + coupleId 동시 구독 합산 방식으로 해결
- PWA 재실행 시 sessionStorage가 초기화되는 환경 특성을 파악하고 지속 데이터는 Firestore에 저장하는 원칙 정립
- AI와 협업해 기획·디자인·개발·배포 전 과정을 혼자 완성한 경험`,
    image: ourtasteImg
  },
  {
    id: 116,
    category: "new",
    title: "SectorFlow",
    date: "2026.03 ~ 2026.03",
    contribution: "100%",
    role: "기획, 디자인, 프론트엔드 개발",
    description: "한국 주식 섹터별 자금 흐름 분석 대시보드",
    tags: ["React", "FastAPI", "Python", "FinanceDataReader", "Vercel", "AI 활용"],
    path: "https://sector-flow-three.vercel.app/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
React + FastAPI 기반 한국 주식 섹터 자금 흐름 분석 대시보드
AI(Claude)와 기획부터 배포까지 페어 프로그래밍 방식으로 풀스택 개발

사용 기술
- Frontend: React, Recharts (차트 라이브러리)
- Backend: Python, FastAPI
- Data: FinanceDataReader (한국 주식 데이터 무료 수집)
- 배포: Vercel (Frontend), Render (Backend), UptimeRobot (모니터링)
- 개발 도구: Claude AI 페어 프로그래밍

주요 기능
- 16개 업종별 거래대금 순위 및 증감률 표시
- 최대 2년치 거래 흐름 차트로 시각화
- 전날 대비 갑자기 거래가 급증한 업종 자동 감지
- 종목별 주가 오름/내림 표시 (▲▼)
- 관리자 페이지에서 업종과 종목을 직접 추가·수정 가능
- 반응형 디자인으로 모바일에서도 최적화된 화면 제공

개발 과정에서 배운 점
- AI와 협업해서 혼자서도 처음부터 끝까지 서비스를 만들 수 있다는 것
- 배포하면서 생기는 오류들을 직접 찾아 해결하는 경험
- 기능 하나를 추가할 때 화면과 서버를 함께 고려해야 한다는 것
- 사용자 입장에서 계속 불편한 점을 찾고 개선하는 과정`,
    image: sfImg
  },
  {
    id: 0,
    category: "new",
    title: "이미지 갤러리",
    date: "2026.02 ~ 2026.02",
    contribution: "100%",
    role: "기획, 디자인, 프론트엔드 개발",
    description: "Next.js + Firebase 기반 이미지 갤러리 커뮤니티",
    tags: [
      "Next.js 15", "TypeScript", "Tailwind CSS", "Vercel", "Firebase", "AI 활용"
    ],
    path: "https://next-image-gallery-board.vercel.app/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
사용 기술
- Frontend: Next.js 15, TypeScript, Tailwind CSS
- Backend: Firebase (Auth, Firestore, Storage, Functions)
- 배포: Vercel (Frontend)
- 개발 도구: Claude AI 페어 프로그래밍

주요 기능
- 사용자 인증 (이메일/Google OAuth)
- 이미지 업로드 및 갤러리
- 댓글/답글 시스템
- 실시간 알림
- 관리자 페이지
- 신고 시스템

개발 과정에서 배운 점
- AI 도구를 활용한 효율적인 개발 프로세스
- Firebase Cloud Functions를 통한 서버리스 아키텍처
- 복잡한 상태 관리 및 실시간 데이터 동기화
- 컴포넌트 분리를 통한 유지보수성 향상`,
    image: nigbImg
  },
  {
    id: 100,
    category: "new",
    title: "갤러리",
    date: "2026.01 ~ 2026.01",
    contribution: "100%",
    role: "기획, 디자인, 프론트엔드 개발",
    description: "React + Firebase 기반 이미지 갤러리",
    tags: ["React", "SCSS", "Firebase","AI 활용"],
    path: "/gallery",
    isExternal: false,
    isClosed: false,
    closedMessage: `
사용 기술
- Frontend: React, SCSS
- Backend: Firebase (Firestore, Storage)
- 개발 도구: Claude AI 페어 프로그래밍

주요 기능
- 이미지 갤러리 리스트
- 이미지 업로드
- 이미지 상세 보기
- 이미지 삭제

개발 과정에서 배운 점
- AI 도구를 활용한 효율적인 개발 프로세스`,
    image: hgImg
  },
  // 신규 구축 프로젝트 리스트 1~
  {
    id: 1,
    category: "new", // 신규 구축 프로젝트
    title: "오늘 뭐 먹지? 점심 룰렛", // 프로젝트 명
    date: "2026.01 ~ 2026.01", // 작업 날짜
    contribution: "100%", // 기여도
    role: "기획, 디자인, 프론트엔드 개발", // 맡은 역할
    description: "결정 장애를 해결해 주는 메뉴 추천", // 간단한 설명
    tags: ["React", "Framer-motion", "SCSS", "AI 활용"], // 사용 기술
    path: "/lunch", // 이동 경로
    isExternal: false,  // 외부 링크 여부 false 내부 / true 외부
    isClosed: false, // 서비스 중단 여부 false 운영중 / true 중단
    closedMessage: `
사용 기술
- Frontend: React, SCSS
- 개발 도구: Claude AI 페어 프로그래밍

주요 기능
- 점심 메뉴 랜덤 추천
- 점심 메뉴 공유

개발 과정에서 배운 점
- AI 도구를 활용한 효율적인 개발 프로세스`,
    image: lunchRouletteImg // 대표 이미지
  },
  {
    id: 2,
    category: "new",
    title: "기존 포트폴리오",
    date: "2017.06 ~ 2026.01",
    contribution: "100%",
    role: "기획, 디자인, 프론트엔드 개발",
    description: "Php를 기반으로 활용해 제작한 개인 포트폴리오 사이트입니다.",
    tags: ["HTML", "CSS", "JS"],
    path: "http://choolooss89.dothome.co.kr/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
PHP 기반으로 개인 포트폴리오 사이트 제작.
HTML·CSS·jQuery를 활용해 전체 마크업 및 인터랙션 구현.
기획부터 퍼블리싱, 기능 구현까지 전 과정 단독 진행.

PHP 기반 개인 포트폴리오 사이트 제작.
HTML·CSS·jQuery를 활용한 마크업 및 UI 구현 전담.`,
    image: myPortfolioImg
  },
  {
    id: 3,
    category: "new",
    title: "에스원",
    date: "2024.06 ~ 2024.10",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "타 s1 서비스와 데이터 연동을 협업한 쇼핑몰입니다.",
    tags: ["CAFE24"],
    path: "https://s15883112.cafe24.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
카페24 베이직 스킨을 기반으로 모바일 쇼핑몰 커스텀 작업 진행.
HTML·CSS·JavaScript를 활용한 UI 구현을 담당했으며,
백엔드 개발자와 협업해 API 통신 후 데이터 가공 및 화면 반영까지 수행.
프로젝트 전반을 PL 겸 작업자로 참여했으며,
기존 에스원 서비스의 로그인·유저 정보 연동을 위해 내부 개발팀과 협업.

카페24 베이직 스킨 기반 모바일 쇼핑몰 커스텀 작업.
프론트엔드 구현 및 API 연동을 통한 데이터 가공·반영 담당.
PL 겸 작업자로 참여해 내부 개발팀과 협업 진행.`,
    image: s1Img
  },
  {
    id: 4,
    category: "new",
    title: "진로토닉몰",
    date: "2024.06 ~ 2024.10",
    contribution: "",
    role: "PL",
    description: "ShopBy API를 활용한 React 쇼핑몰입니다.",
    tags: ["ShopBy", "React", "SCSS"],
    path: "https://www.jinrotonic.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
진로 토닉워터 공식 쇼핑몰 구축 프로젝트에 PL로 참여.
ShopBy 기반 환경에서 제공된 API를 활용해,
React·SCSS·GSAP 기반 프론트엔드 개발이 진행되도록
프로젝트 일정·작업자 관리 및 피드백을 담당.
작업 지연 이슈 발생 시 개발에 직접 참여해 마무리까지 지원.

진로 토닉워터 공식 쇼핑몰 구축 프로젝트 PL 참여.
React 기반 프론트엔드 개발 일정·작업자 관리 및 협업 담당.`,
    image: jinrotonicImg
  },
  {
    id: 5,
    category: "new",
    title: "데이제스트-선포하라 공식몰",
    date: "2024.06 ~ 2024.10",
    contribution: "",
    role: "PL",
    description: "CAFE24 커스텀 쇼핑몰입니다.",
    tags: ["CAFE24", "SCSS"],
    path: "https://sunpohara.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
카페24 베이직 스킨 기반 공식 쇼핑몰 구축 프로젝트에 PL로 참여.
프로젝트 일정 및 작업자 스케줄 관리, 작업 결과에 대한 피드백을 담당했으며,
SCSS 기반 퍼블리싱 환경에서 일부 마크업 수정 및 개발 서포트 수행.

카페24 베이직 스킨 기반 쇼핑몰 구축 프로젝트 PL 참여.
일정·작업자 관리 및 피드백 중심으로 진행, 일부 퍼블리싱 서포트.`,
    image: daygestSunpoharaImg
  },
  {
    id: 6,
    category: "new",
    title: "샹프리 공식몰",
    date: "2024.06 ~ 2024.10",
    contribution: "",
    role: "PL",
    description: "CAFE24 커스텀 쇼핑몰입니다.",
    tags: ["CAFE24", "SCSS"],
    path: "https://shangpree.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
카페24 베이직 스킨 기반 공식 쇼핑몰 구축 프로젝트에 PL로 참여.
프로젝트 일정 및 작업자 스케줄 관리, 작업 결과에 대한 피드백을 담당했으며,
SCSS 기반 퍼블리싱 환경에서 일부 마크업 수정 및 개발 서포트 수행.

카페24 기반 쇼핑몰 구축 프로젝트 PL 참여.
일정·작업자 관리 및 피드백 중심, 일부 퍼블리싱 서포트.`,
    image: shangpreeImg
  },
  {
    id: 7,
    category: "new",
    title: "스포츠 스코어",
    date: "2023.04 ~ 2023.5",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "실시간 스포츠 경기 점수 확인이 가능한 하이브리드 앱입니다.",
    tags: ["Vue", "SCSS"],
    path: "https://intimegames.com/",
    isExternal: false,
    isClosed: true,
    closedMessage: `
Vue.js 기반 실시간 스포츠 스코어 서비스 제작.
연령 제한 및 스토어 심사 이슈가 있는 기존 픽메이커 서비스의 확장을 위해,
경기 일정·실시간 스코어만 제공하는 별도 서비스를 기획·개발.
기존 픽메이커 소스를 활용해 프론트엔드 전반을 단독 개발했으며,
디자인 적용 후 하이브리드 앱으로 배포 및 운영까지 전담.

Vue.js 기반 실시간 스포츠 스코어 하이브리드 앱 제작.
기존 픽메이커 소스를 활용해 프론트엔드 단독 개발 및 운영 담당.

스토어 심사 리스크를 서비스 분리로 해결한 실무형 확장 프로젝트`,
    image: sportsscoreImg
  },
  {
    id: 8,
    category: "new",
    title: "인타임 게임즈",
    date: "2022.04 ~ 2022.5",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "인타임 게임즈 회사 소개 및 홍보를 위한 반응형 웹사이트입니다.",
    tags: ["Gulp", "HTML", "CSS", "JS"],
    path: "https://intimegames.com/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    closedMessage: `
Gulp 기반 퍼블리싱 환경에서 진행된 회사 소개 홈페이지 제작 프로젝트.
디자이너 시안을 기반으로 HTML, CSS, JavaScript(jQuery)를 활용해
반응형 원페이지 사이트 마크업 및 인터랙션 구현을 전담했으며,
jQuery 플러그인을 활용한 스크롤·모션 인터랙션을 적용.
기본 Gulp 세팅은 선임이 구성한 환경을 사용해 작업 진행.

Gulp 기반 회사 소개 웹사이트 퍼블리싱 전담.
반응형 원페이지 마크업 및 인터랙션 구현.`,
    image: pickmakerImg
  },
  {
    id: 9,
    category: "new",
    title: "제단법인 한국IFCJ",
    date: "2021.04 ~ 2021.4",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "제단법인 한국IFCJ 소개 및 홍보를 위한 반응형 웹사이트입니다.",
    tags: ["Bootstrap"],
    path: "http://www.ifcj.kr/",
    isExternal: false,
    isClosed: false,
    closedMessage: `
Bootstrap 커스텀 기반 반응형 원페이지 웹사이트 구축 프로젝트.
디자이너 시안을 제공받아 프리랜서로 참여했으며,
HTML, CSS, JavaScript(jQuery)를 활용해 전체 마크업 및 인터랙션 구현을 담당.
기부·후원형 서비스 특성을 고려한 레이아웃 구성과 반응형 대응 작업 수행.

Bootstrap 커스텀 기반 반응형 원페이지 사이트 퍼블리싱 전담.
HTML·CSS·jQuery 활용.`,
    image: ifcjImg
  },
  {
    id: 10,
    category: "new",
    title: "벤자민 무어 페인트",
    date: "2020.07 ~ 2020.10",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "컬리칩 개발 협업, 데이터 연동 작업힌 GodoMall5 쇼핑몰입니다.",
    tags: ["GodoMall"],
    path: "https://www.benjaminmoore.co.kr/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
고도몰5 기본 스킨 기반 쇼핑몰 커스텀 프로젝트.
사내 디자이너 시안을 기반으로 전체 UI 디자인 커스텀 및 퍼블리싱을 단독 수행.
백엔드 개발자와 협업해 컬러칩 기능을 API 연동 방식으로 구현했으며,
데이터 가공 및 화면 반영까지 프론트엔드 영역 전반을 담당.

고도몰5 기반 쇼핑몰 커스텀 퍼블리싱 전담.
컬러칩 기능 API 연동 협업 경험.`,
    image: benjaminmooreImg
  },
  {
    id: 11,
    category: "new",
    title: "독립마켓",
    date: "2020.11 ~ 2020.11",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "독립마켓 제품 판매를 위한 쇼핑몰입니다.",
    tags: ["MakeShop"],
    path: "http://dokripmarket.net/",
    isExternal: false,
    isClosed: true,
    closedMessage: `
MakeShop 기본 스킨 기반 쇼핑몰 커스텀 프로젝트.
전 직장 동료 소개로 프리랜서 참여했으며, 제공된 디자인을 바탕으로
HTML, CSS, JavaScript(jQuery)를 활용한 퍼블리싱 및 스킨 커스텀을 단독 수행.

MakeShop 기반 쇼핑몰 스킨 커스텀 프리랜서 참여.
디자인 반영 중심 퍼블리싱 작업 수행.`,
    image: happyfarmImg
  },
  {
    id: 12,
    category: "new",
    title: "허브레쥬메",
    date: "2019.09 ~ 2019.10",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "Php기반 Pc/Mobile 제품 소개 사이트입니다.",
    tags: ["HTML", "CSS", "JS"],
    path: "http://aphrozone2.cafe24.com/",
    isExternal: false,
    isClosed: true,
    closedMessage: `
허브레쥬메 · 루비셀 · 아토락 (브랜드 사이트 제작)
동일 회사 재직 당시 브랜드별 제품 소개 홈페이지 제작 프로젝트.
허브레쥬메(건강식품), 루비셀(고급 화장품 라인), 아토락(저자극 화장품 라인)
총 3개 브랜드 사이트를 각각 제작했으며, 디자인은 디자이너로부터 제공받아
PHP 기반 환경에서 HTML, CSS, jQuery를 활용해 퍼블리싱 및 프론트엔드 작업을 단독 수행.

허브레쥬메: PC / Mobile 분리 구축
루비셀: PC / Mobile 분리 구축
아토락: 반응형 웹으로 구축

브랜드별 제품 소개 사이트 다수 제작.
PHP 기반 퍼블리싱 단독 수행, PC·모바일 분리 및 반응형 구축 경험.`,
    image: herb_resumeImg
  },
  {
    id: 13,
    category: "new",
    title: "AphrozoneVn",
    date: "2019.02 ~ 2019.4",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "아프로존 베트남 제품 및 회사 소개를 위한 반응형 사이트입니다.",
    tags: ["GnuBoard"],
    path: "http://aphrozone3.cafe24.com/",
    isExternal: false,
    isClosed: true,
    closedMessage: `
기존 타 업체를 통해 제작되어 운영 중이던 Aphrozone 홈페이지를
베트남 제공을 목적으로 신규 구축한 다국어 프로젝트.
기존 사이트를 기준으로 디자인과 구조를 분석해 그누보드 기반으로 커스텀 제작했으며,
HTML, CSS, jQuery를 활용해 기존 서비스와 동일한 형태로 재현.

기존 서비스 기반 다국어 사이트 구축.
그누보드 커스텀 및 퍼블리싱 단독 수행.`,
    image: aphrozoneImg
  },
  {
    id: 14,
    category: "new",
    title: "아토락",
    date: "2018.09 ~ 2018.09",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "Php기반 반응형 제품 소개 사이트입니다.",
    tags: ["HTML", "CSS", "jQuery"],
    path: "http://atorak.co.kr/",
    isExternal: false,
    isClosed: true,
    closedMessage: `
허브레쥬메 · 루비셀 · 아토락 (브랜드 사이트 제작)
동일 회사 재직 당시 브랜드별 제품 소개 홈페이지 제작 프로젝트.
허브레쥬메(건강식품), 루비셀(고급 화장품 라인), 아토락(저자극 화장품 라인)
총 3개 브랜드 사이트를 각각 제작했으며, 디자인은 디자이너로부터 제공받아
PHP 기반 환경에서 HTML, CSS, jQuery를 활용해 퍼블리싱 및 프론트엔드 작업을 단독 수행.

허브레쥬메: PC / Mobile 분리 구축
루비셀: PC / Mobile 분리 구축
아토락: 반응형 웹으로 구축

브랜드별 제품 소개 사이트 다수 제작.
PHP 기반 퍼블리싱 단독 수행, PC·모바일 분리 및 반응형 구축 경험.`,
    image: atorakImg
  },
  {
    id: 15,
    category: "new",
    title: "루비셀",
    date: "2018.07 ~ 2018.08",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "Php기반 Pc/Mobile 제품 소개 사이트입니다.",
    tags: ["HTML", "CSS", "JS"],
    path: "http://ruby-cell.co.kr/",
    isExternal: false,
    isClosed: true,
    closedMessage: `
허브레쥬메 · 루비셀 · 아토락 (브랜드 사이트 제작)
동일 회사 재직 당시 브랜드별 제품 소개 홈페이지 제작 프로젝트.
허브레쥬메(건강식품), 루비셀(고급 화장품 라인), 아토락(저자극 화장품 라인)
총 3개 브랜드 사이트를 각각 제작했으며, 디자인은 디자이너로부터 제공받아
PHP 기반 환경에서 HTML, CSS, jQuery를 활용해 퍼블리싱 및 프론트엔드 작업을 단독 수행.

허브레쥬메: PC / Mobile 분리 구축
루비셀: PC / Mobile 분리 구축
아토락: 반응형 웹으로 구축

브랜드별 제품 소개 사이트 다수 제작.
PHP 기반 퍼블리싱 단독 수행, PC·모바일 분리 및 반응형 구축 경험.`,
    image: rubyCellImg
  },
  {
    id: 16,
    category: "new",
    title: "다산씨엔텍 다국어",
    date: "2018.05 ~ 2018.06",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "CAFE24 빌더 스킨을 커스텀한 반응형 제품 및 회사 소개 사이트입니다.",
    tags: ["CAFE24"],
    path: "http://www.dasancntech.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
카페24 빌더 호스팅 환경에서 운영 중이던 기업 홈페이지 개편 프로젝트.
기존 유료 스킨을 사용 중인 상태에서 입사 후 디자인 전반을 수정했으며,
다국어 페이지 번역 및 콘텐츠 적용을 직접 수행해 글로벌 대응 구조로 정비.

카페24 빌더 기반 기업 홈페이지 개편.
디자인 수정 및 다국어 콘텐츠 적용 단독 수행.`,
    image: dasanImg
  },
  {
    id: 17,
    category: "new",
    title: "원자력산업회의 리뉴얼",
    date: "2017.11 ~ 2017.11",
    contribution: "70%",
    role: "퍼블리싱",
    description: "원자력산업회의 회사 소개를 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://www.kaif.or.kr/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
기존 홈페이지 전면 개편이 아닌,
노후된 디자인 개선과 사용자 편의성 향상을 목표로 한 부분 리뉴얼 프로젝트.
기존 서비스 구조를 유지한 상태에서 UI 개선 중심의 디자인 리뉴얼을 진행.

기존 홈페이지 부분 디자인 리뉴얼.
UI 개선 중심의 디자인 개편 수행.`,
    image: kaifImg
  },
  {
    id: 18,
    category: "new",
    title: "고려자동차 (TALGUT)",
    date: "2017.10 ~ 2017.10",
    contribution: "100%",
    role: "퍼블리싱",
    description: "고려자동차의 제품 및 회사 소개를 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://www.talgut.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
PHP 기반 웹 프로젝트로,
프로젝트 초기 단계에서 디자인에 맞춰 메인 및 서브 레이아웃의 기본 마크업 구조를 HTML, CSS로 구축.
이후 개발자가 PHP 연동 작업을 진행하면,
완료된 결과물을 다시 전달받아 서브 페이지 마크업 보완 및 기본 인터랙션을 적용하는 방식으로 프로젝트를 마무리.

반응형 웹 프로젝트로 전반적인 퍼블리싱 흐름을 주도적으로 담당.

PHP 기반 반응형 웹 퍼블리싱 참여.
초기 레이아웃 마크업 → PHP 연동 후 서브 페이지 및 인터랙션 마무리.`,
    image: talgutImg
  },
  {
    id: 19,
    category: "new",
    title: "나카무라 아카데미 리뉴얼",
    date: "2017.10 ~ 2017.10",
    contribution: "50%",
    role: "퍼블리싱",
    description: "나카무라 아카데미 제품 및 회사 소개를 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "https://www.nakamurakorea.co.kr/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
기존 서비스를 유지한 상태에서
노후화된 디자인 개선과 UI 사용성 향상을 목표로 한 디자인 리뉴얼 프로젝트.
전체 리뉴얼이 아닌 부분 리뉴얼 형태로 진행되었으며,
팀원과 페이지 단위로 역할을 나눠 디자인 수정 작업을 수행.

기존 구조를 해치지 않으면서 시각적 완성도와 사용성을 개선하는 데 집중.

기존 서비스 디자인 리뉴얼 참여.
페이지 분담 작업을 통한 UI·디자인 개선.`,
    image: nakamuraImg
  },
  {
    id: 20,
    category: "new",
    title: "타이허(TAIHE)",
    date: "2017.10 ~ 2017.10",
    contribution: "100%",
    role: "퍼블리싱",
    description: "타이허 식당 소개를 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://taihe.or.kr/",
    isExternal: false,
    isClosed: true,
    closedMessage: `
중국음식점 소개 및 예약 시스템을 포함한 반응형 원페이지 사이트 구축 프로젝트.
PHP 기반으로 개발되었으며,
HTML / CSS / jQuery를 활용해 전반적인 마크업과 인터랙션을 구현.

매장 소개 흐름과 예약 동선을 고려한 원페이지 구조로 작업.

중식당 소개·예약 기능 포함 반응형 원페이지 사이트 구축.
PHP 기반 퍼블리싱 및 인터랙션 구현.`,
    image: taiheImg
  },
  {
    id: 21,
    category: "new",
    title: "어반 브룩(URBAN BROOK)",
    date: "2017.10 ~ 2017.10",
    contribution: "100%",
    role: "퍼블리싱",
    description: "어반 브룩 소개를 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://urbanbrook.co.kr/",
    isExternal: false,
    isClosed: true,
    closedMessage: `
PHP 기반 반응형 웹 프로젝트.
프로젝트 초기에 HTML / CSS로 메인·서브 레이아웃 기본 구조 마크업을 담당했으며,
이후 개발자가 PHP를 적용한 뒤 전달받아 서브페이지 마크업 보완 및 기본 인터랙션 구현까지 진행.

퍼블리셔–개발자 분업 구조에서 초기 구조 설계부터 마무리 퍼블리싱까지 담당한 프로젝트.

PHP 기반 반응형 웹 퍼블리싱.
레이아웃 구조 마크업 → 개발 연동 후 서브페이지 및 인터랙션 마무리.`,
    image: urbanbrookImg
  },
  {
    id: 22,
    category: "new",
    title: "풍무역세권개발자산관리",
    date: "2017.09 ~ 2017.09",
    contribution: "100%",
    role: "퍼블리싱",
    description: "풍무역세권개발자산관리 소개를 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://pungmuamc.co.kr/",
    isExternal: true,
    isClosed: false,
    closedMessage: `
PHP 기반 반응형 웹 프로젝트.
프로젝트 초기에 HTML / CSS로 메인·서브 레이아웃 기본 구조 마크업을 담당했으며,
개발자가 PHP 적용 후 전달한 결과물을 받아 서브페이지 마크업 보완 및 기본 인터랙션 구현까지 진행.

퍼블리셔–개발자 협업 구조에서 초기 구조 설계부터 후반 퍼블리싱 마무리까지 담당한 프로젝트.

PHP 기반 반응형 웹 퍼블리싱.
레이아웃 구조 마크업 → 개발 연동 후 서브페이지 및 인터랙션 마무리.`,
    image: pungmuImg
  },
  {
    id: 23,
    category: "new",
    title: "똑똑한검진 리뉴얼",
    date: "2017.09 ~ 2017.09",
    contribution: "60%",
    role: "퍼블리싱",
    description: "똑똑한검진 소개 및 예약을 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    // path: "https://healthsmart.kr:5004/",
    path: "http://mdesign.nayana.kr/?c=info",
    isExternal: true,
    isClosed: false,
    closedMessage: `
PHP 기반 서비스의 부분 리뉴얼 프로젝트.
전체 개편이 아닌 병원 검색 페이지 기능 추가 및 디자인 리뉴얼을 진행했으며,
지도 API를 활용해 병원 위치 표시 및 병원 정보 제공 기능을 구현.

기존 서비스 구조를 유지한 상태에서
UI 개선 + 기능 확장 중심으로 퍼블리싱 및 프론트 작업을 수행한 프로젝트.

PHP 기반 서비스 부분 리뉴얼.
병원 검색 페이지 UI 개선 및 지도 API 기반 병원 정보 기능 추가.`,
    image: smart_checkupImg
  },
  {
    id: 24,
    category: "new",
    title: "퓨어락",
    date: "2017.08 ~ 2017.08",
    contribution: "30%",
    role: "퍼블리싱",
    description: "퓨어락 제품 소개를 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://www.pureland.co.kr/ko/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: purelandImg
  },
  {
    id: 25,
    category: "new",
    title: "CNF",
    date: "2017.08 ~ 2017.08",
    contribution: "90%",
    role: "퍼블리싱",
    description: "CNF 회사 및 제품 소개를 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://www.cnfcos.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: cnfImg
  },
  {
    id: 26,
    category: "new",
    title: "뉴샘",
    date: "2017.08 ~ 2017.08",
    contribution: "90%",
    role: "퍼블리싱",
    description: "맑은소프트(타사) 솔루션을 활용한 교육 서비스입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://newsaem.malgnlms.com/main/index.jsp",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: newSeamImg
  },
  {
    id: 27,
    category: "new",
    title: "라온제나스피치",
    date: "2017.08 ~ 2017.08",
    contribution: "100%",
    role: "퍼블리싱",
    description: "맑은소프트(타사) 솔루션을 활용한 교육 서비스입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://www.laingang.co.kr/main/index.jsp",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: laingangImg
  },
  {
    id: 28,
    category: "new",
    title: "세경화학",
    date: "2017.07 ~ 2017.07",
    contribution: "100%",
    role: "퍼블리싱",
    description: "세경화학 제품 판매를 위한 쇼핑몰입니다.",
    tags: ["CAFE24"],
    path: "http://www.xn--289a68il0j79a73ges7a.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: SekyungImg
  },
  {
    id: 29,
    category: "new",
    title: "라라펠",
    date: "2017.07 ~ 2017.07",
    contribution: "100%",
    role: "퍼블리싱",
    description: "라라펠 제품 판매를 위한 쇼핑몰입니다.",
    tags: ["CAFE24"],
    path: "http://lalafel.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: lalafelImg
  },
  {
    id: 30,
    category: "new",
    title: "똑똑한산모",
    date: "2017.06 ~ 2017.06",
    contribution: "30%",
    role: "퍼블리싱",
    description: "똑똑한산모 서비스 소개를 위한 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://smartmother.co.kr/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: smart_motherImg
  },
  {
    id: 31,
    category: "new",
    title: "검마스터",
    date: "2017.06 ~ 2017.06",
    contribution: "100%",
    role: "퍼블리싱",
    description: "맑은소프트(타사) 솔루션을 활용한 교육 서비스입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://www.gmaster.kr/main/index.jsp",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: gummasterImg
  },
  {
    id: 32,
    category: "new",
    title: "팩앤팩",
    date: "2017.05 ~ 2017.05",
    contribution: "100%",
    role: "퍼블리싱",
    description: "제품 판매를 위한 쇼핑몰입니다.",
    tags: ["CAFE24"],
    path: "http://factnpack.co.kr/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: factnpackImg
  },
  {
    id: 33,
    category: "new",
    title: "라닉스",
    date: "2017.04 ~ 2017.04",
    contribution: "30%",
    role: "퍼블리싱",
    description: "회사 및 제품 소개를 위한 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://www.ranix.co.kr/ko/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: ranixImg
  },
  {
    id: 34,
    category: "new",
    title: "건국대학교 정보통신대학원",
    date: "2017.03 ~ 2017.03",
    contribution: "100%",
    role: "퍼블리싱",
    description: "모바일노트 서비스입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "https://werkuit.com:3000/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: KonkukImg
  },
  {
    id: 35,
    category: "new",
    title: "VP코리아",
    date: "2017.02 ~ 2017.02",
    contribution: "100%",
    role: "퍼블리싱",
    description: "서비스 소개를 위한 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://opti-cube.co.kr/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: vpkoreaImg
  },
  {
    id: 36,
    category: "new",
    title: "아이엠플러스",
    date: "2017.02 ~ 2017.02",
    contribution: "100%",
    role: "퍼블리싱",
    description: "제품 판매를 위한 쇼핑몰입니다.",
    tags: ["CAFE24"],
    path: "http://iamplus.co.kr/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: iamPlusImg
  },
  {
    id: 37,
    category: "new",
    title: "라쉬움 어학원",
    date: "2017.01 ~ 2017.01",
    contribution: "100%",
    role: "퍼블리싱",
    description: "맑은소프트(타사) 솔루션을 활용한 교육 서비스입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://www.lyceumlli.com/main/index.jsp",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: lyceumImg
  },
  {
    id: 38,
    category: "new",
    title: "히든애드",
    date: "2017.01 ~ 2017.01",
    contribution: "20%",
    role: "퍼블리싱",
    description: "회사 및 서비스 소개를 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://www.hiddenad.co.kr/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: hiddenadImg
  },
  {
    id: 39,
    category: "new",
    title: "비즈아이앤에프",
    date: "2017.01 ~ 2017.01",
    contribution: "100%",
    role: "퍼블리싱",
    description: "회사 및 서비스 소개를 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://vizinf.com/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: vizinfImg
  },
  {
    id: 40,
    category: "new",
    title: "순성",
    date: "2016.12 ~ 2016.12",
    contribution: "30%",
    role: "퍼블리싱",
    description: "제품 판매를 위한 쇼핑몰입니다.",
    tags: ["CAFE24"],
    path: "http://www.soonsungmall.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: soonsungImg
  },
  {
    id: 41,
    category: "new",
    title: "민전산부인과",
    date: "2016.12 ~ 2016.12",
    contribution: "40%",
    role: "퍼블리싱",
    description: "병원 및 서비스 소개를 위한 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://www.mjobgy.co.kr/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: mjobgyImg
  },
  {
    id: 42,
    category: "new",
    title: "가나스틸",
    date: "2016.11 ~ 2016.11",
    contribution: "100%",
    role: "퍼블리싱",
    description: "회사 및 서비스 소개를 위한 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://www.ganasteel.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: ganasteelImg
  },
  {
    id: 43,
    category: "new",
    title: "애드몬",
    date: "2016.010 ~ 2016.010",
    contribution: "70%",
    role: "퍼블리싱",
    description: "회사 및 서비스 소개를 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "JS", "jQuery"],
    path: "http://www.admon.co.kr/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: admonImg
  },


  // 유지보수 프로젝트 리스트 100~
  {
    id: 100,
    category: "maintain",
    title: "농심몰",
    date: "2024.06 ~ 2024.10",
    role: "카페24 유지보수 및 이벤트 페이지 개발",
    description: "카페24 기반의 농심 공식 몰 유지보수와 시즌별 이벤트 페이지 제작을 담당했습니다.",
    tags: ["Cafe24", "HTML", "SCSS"],
    path: "https://nongshimmall.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: nongshimImg
  },
  {
    id: 101,
    category: "maintain",
    title: "후디스몰",
    date: "2024.06 ~ 2024.10",
    role: "카페24 유지보수",
    description: "후디스 공식 쇼핑몰의 UI 개선 및 기능 유지보수를 진행했습니다.",
    tags: ["Cafe24", "HTML", "SCSS"],
    path: "https://foodismall.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: foodismallImg
  },
  {
    id: 102,
    category: "maintain",
    title: "아모스프로페셔널",
    date: "2024.06 ~ 2024.10",
    role: "카페24 유지보수 및 이벤트 운영",
    description: "브랜드 아이덴티티에 맞춘 이벤트 페이지 구현과 사이트 안정화를 담당했습니다.",
    tags: ["Cafe24", "JS", "CSS"],
    path: "https://amosprofessional.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: amosImg
  },
  {
    id: 103,
    category: "maintain",
    title: "아윤채프로몰",
    date: "2024.06 ~ 2024.10",
    role: "카페24 유지보수 및 이벤트 개발",
    description: "아윤채 프로페셔널 몰의 운영 및 프로모션 페이지 퍼블리싱을 진행했습니다.",
    tags: ["Cafe24", "HTML", "JS"],
    path: "https://ayunchepro.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: ayuncheproImg
  },
  {
    id: 104,
    category: "maintain",
    title: "아윤채몰",
    date: "2024.06 ~ 2024.10",
    role: "카페24 유지보수 및 이벤트 개발",
    description: "아윤채 공식 브랜드몰의 상시 유지보수 및 이벤트 관리를 담당했습니다.",
    tags: ["Cafe24", "HTML", "JS"],
    path: "https://ayunche.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: ayuncheImg
  },
  {
    id: 105,
    category: "maintain",
    title: "픽메이커",
    date: "2021.05 ~ 2023.11",
    role: "프론트엔드 개발 (Pc/Mobile)",
    description: "Vue2 기반 실시간 스포츠 베팅 게임 서비스의 유지보수 및 신규 이벤트를 개발했습니다.",
    tags: ["Vue2", "SCSS", "JS"],
    path: "/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: pickmakerImg
  },
  {
    id: 106,
    category: "maintain",
    title: "스포츠 스코어",
    date: "2023.05 ~ 2023.11",
    role: "Vue 환경 유지보수",
    description: "하이브리드 앱 환경에서의 Vue2 기반 유지보수 작업을 수행했습니다.",
    tags: ["Vue2", "Hybrid App"],
    path: "/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: sportsscoreImg
  },
  {
    id: 107,
    category: "maintain",
    title: "인타임 게임즈",
    date: "2023.05 ~ 2023.11",
    role: "Gulp 환경 유지보수",
    description: "원페이지 반응형 웹사이트의 유지보수 및 빌드 환경 관리를 담당했습니다.",
    tags: ["Gulp", "HTML", "JS"],
    path: "/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: intimeImg
  },
  {
    id: 108,
    category: "maintain",
    title: "허브레쥬메",
    date: "2019.10 ~ 2020.03",
    role: "반응형 웹 유지보수",
    description: "Html, CSS, jQuery 기반의 반응형 사이트 기능 개선을 담당했습니다.",
    tags: ["jQuery", "Responsive"],
    path: "/",
    isExternal: false,
    isClosed: false,
    closedMessage: ``,
    image: herb_resumeImg
  },
  {
    id: 109,
    category: "maintain",
    title: "AphrozoneVn",
    date: "2019.06 ~ 2020.03",
    role: "그누보드 반응형 유지보수",
    description: "그누보드 솔루션 기반의 반응형 웹사이트 유지보수를 진행했습니다.",
    tags: ["GnuBoard", "jQuery"],
    path: "http://aphrozone3.cafe24.com/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: aphrozoneImg
  },
  {
    id: 110,
    category: "maintain",
    title: "아토락",
    date: "2018.09 ~ 2020.03",
    role: "원페이지 반응형 유지보수",
    description: "브랜드 원페이지 사이트의 퍼블리싱 유지보수를 담당했습니다.",
    tags: ["HTML", "CSS", "jQuery"],
    path: "http://atorak.co.kr/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: atorakImg
  },
  {
    id: 111,
    category: "maintain",
    title: "루비셀",
    date: "2018.07 ~ 2020.03",
    role: "Pc / Mobile 유지보수",
    description: "루비셀 공식 웹사이트의 Pc 및 Mobile 버전 유지보수를 담당했습니다.",
    tags: ["HTML", "CSS", "jQuery"],
    path: "http://ruby-cell.co.kr/",
    isExternal: false,
    isClosed: true,
    closedMessage: ``,
    image: rubyCellImg
  },
  {
    id: 112,
    category: "maintain",
    title: "다산씨엔텍 다국어",
    date: "2018.05 ~ 2020.03",
    role: "카페24 반응형 테마 유지보수",
    description: "다국어 지원 쇼핑몰의 반응형 테마 커스텀 및 유지보수를 수행했습니다.",
    tags: ["Cafe24", "Multilingual"],
    path: "http://www.dasancntech.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: dasanImg
  },
  {
    id: 113,
    category: "maintain",
    title: "닥터세비앙의원",
    date: "2018.03 ~ 2020.03",
    role: "반응형 그누보드 유지보수",
    description: "의료 서비스 사이트의 그누보드 기반 유지보수를 진행했습니다.",
    tags: ["GnuBoard", "jQuery"],
    path: "http://www.drceviang.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: drImg
  },
  {
    id: 114,
    category: "maintain",
    title: "현성그룹",
    date: "2018.03 ~ 2020.03",
    role: "카페24 반응형 테마 유지보수",
    description: "그룹사 홍보 사이트의 유지보수 및 관리를 담당했습니다.",
    tags: ["Cafe24", "HTML", "CSS"],
    path: "http://www.hsg-cloud.com/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: hsgImg
  },
  {
    id: 115,
    category: "maintain",
    title: "원자력산업회의 리뉴얼",
    date: "2016.10 ~ 2017.11",
    role: "반응형 웹 유지보수",
    description: "협회 사이트의 반응형 UI 개편 및 유지보수를 진행했습니다.",
    tags: ["HTML", "CSS", "jQuery"],
    path: "http://www.kaif.or.kr/",
    isExternal: true,
    isClosed: false,
    closedMessage: ``,
    image: kaifImg
  }
];