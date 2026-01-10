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


export const portfolioList = [
  // 신규 구축 프로젝트 리스트 1~
  {
    id: 1,
    category: "new", // 신규 구축 프로젝트
    title: "오늘 뭐 먹지? 점심 룰렛", // 프로젝트 명
    date: "2026.01 ~ 2026.01", // 작업 날짜
    contribution: "100%", // 기여도
    role: "기획, 디자인, 프론트엔드 개발", // 맡은 역할
    description: "결정 장애를 해결해 주는 메뉴 추천 서비스입니다.", // 간단한 설명
    tags: ["React", "Framer-motion", "SCSS"], // 사용 기술
    path: "/lunch", // 이동 경로
    isExternal: false,  // 외부 링크 여부
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
    image: myPortfolioImg
  },
  {
    id: 3,
    category: "new",
    title: "에스원",
    date: "2024.06 ~ 2024.10",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "에스원 제품 판매를 위한 쇼핑몰입니다.",
    tags: ["CAFE24"],
    path: "https://s15883112.cafe24.com/",
    isExternal: true,
    image: s1Img
  },
  {
    id: 4,
    category: "new",
    title: "진로토닉몰",
    date: "2024.06 ~ 2024.10",
    // contribution: "100%",
    role: "PL",
    description: "진로의 제품 판매를 위한 쇼핑몰입니다.",
    tags: ["ShopBy", "React", "SCSS"],
    path: "https://www.jinrotonic.com/",
    isExternal: true,
    image: jinrotonicImg
  },
  {
    id: 5,
    category: "new",
    title: "데이제스트-선포하라 공식몰",
    date: "2024.06 ~ 2024.10",
    // contribution: "100%",
    role: "PL",
    description: "제품 판매를 위한 쇼핑몰입니다.",
    tags: ["CAFE24", "SCSS"],
    path: "https://sunpohara.com/",
    isExternal: true,
    image: daygestSunpoharaImg
  },
  {
    id: 6,
    category: "new",
    title: "샹프리 공식몰",
    date: "2024.06 ~ 2024.10",
    // contribution: "100%",
    role: "PL",
    description: "샹프리 제품 판매를 위한 쇼핑몰입니다.",
    tags: ["CAFE24", "SCSS"],
    path: "https://shangpree.com/",
    isExternal: true,
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
    // path: "/https://intimegames.com/",
    path: "/",
    isExternal: false,
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
    // path: "/https://intimegames.com/",
    path: "/",
    isExternal: false,
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
    // path: "http://www.ifcj.kr/",
    path: "/",
    isExternal: false,
    image: ifcjImg
  },
  {
    id: 10,
    category: "new",
    title: "벤자민 무어 페인트",
    date: "2020.07 ~ 2020.10",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "벤자민 무어 페인트 제품 판매를 위한 쇼핑몰입니다.",
    tags: ["GodoMall"],
    path: "https://www.benjaminmoore.co.kr/",
    isExternal: true,
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
    // path: "http://dokripmarket.net/",
    path: "/",
    isExternal: false,
    image: happyfarmImg
  },
  {
    id: 12,
    category: "new",
    title: "허브레쥬메",
    date: "2019.09 ~ 2019.10",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "허브레쥬메 제품 소개를 위한 Pc/Mobile 사이트입니다.",
    tags: ["HTML", "CSS", "JS"],
    // path: "http://aphrozone2.cafe24.com/",
    path: "/",
    isExternal: false,
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
    // path: "http://aphrozone3.cafe24.com/",
    path: "/",
    isExternal: false,
    image: aphrozoneImg
  },
  {
    id: 14,
    category: "new",
    title: "아토락",
    date: "2018.09 ~ 2018.09",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "아토락 제품 소개를 위한 반응형 사이트입니다.",
    tags: ["HTML", "CSS", "jQuery"],
    // path: "http://atorak.co.kr/",
    path: "/",
    isExternal: false,
    image: atorakImg
  },
  {
    id: 15,
    category: "new",
    title: "루비셀",
    date: "2018.07 ~ 2018.08",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "루비셀 제품 소개를 위한 Pc/Mobile 사이트입니다.",
    tags: ["HTML", "CSS", "JS"],
    // path: "http://ruby-cell.co.kr/",
    path: "/",
    isExternal: false,
    image: rubyCellImg
  },
  {
    id: 16,
    category: "new",
    title: "다산씨엔텍 다국어",
    date: "2018.05 ~ 2018.06",
    contribution: "100%",
    role: "프론트엔드 개발",
    description: "다산씨엔텍 제품 및 회사 소개를 위한 반응형 사이트입니다.",
    tags: ["CAFE24"],
    path: "http://www.dasancntech.com/",
    isExternal: true,
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
    // path: "http://taihe.or.kr/",
    path: "/",
    isExternal: false,
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
    // path: "http://urbanbrook.co.kr/",
    path: "/",
    isExternal: false,
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
    // path: "http://newsaem.malgnlms.com/main/index.jsp",
    path: "/",
    isExternal: false,
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
    // path: "http://smartmother.co.kr/",
    path: "/",
    isExternal: false,
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
    // path: "http://www.gmaster.kr/main/index.jsp",
    path: "/",
    isExternal: false,
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
    // path: "http://factnpack.co.kr/",
    path: "/",
    isExternal: false,
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
    // path: "http://www.ranix.co.kr/ko/",
    path: "/",
    isExternal: false,
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
    // path: "https://werkuit.com:3000/",
    path: "/",
    isExternal: false,
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
    // path: "http://opti-cube.co.kr/",
    path: "/",
    isExternal: false,
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
    // path: "http://iamplus.co.kr/",
    path: "/",
    isExternal: false,
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
    // path: "http://www.hiddenad.co.kr/",
    path: "/",
    isExternal: false,
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
    // path: "http://vizinf.com/",
    path: "/",
    isExternal: false,
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
    // path: "http://aphrozone3.cafe24.com/",
    path: "/",
    isExternal: false,
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
    // path: "http://atorak.co.kr/",
    path: "/",
    isExternal: false,
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
    // path: "http://ruby-cell.co.kr/",
    path: "/",
    isExternal: false,
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
    image: kaifImg
  }
];