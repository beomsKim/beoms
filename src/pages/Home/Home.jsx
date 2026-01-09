import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SiVuedotjs, SiJavascript, SiHtml5, SiCss3, SiFigma, SiGithub } from 'react-icons/si';
import { experienceList } from '../../data/experienceData';
import { portfolioList } from '../../data/portfolioData';
import './home.scss';

const Home = () => {
  const navigate = useNavigate();

  // 1. 사용할 배경 컬러 리스트 (여기서 수정해!)
  const colorList = ['#3182f6', '#7e57c2', '#26a69a', '#ff7043', '#42a5f5'];

  // 배경 도형 랜덤 생성
  const bgShapes = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({ // 10개에서 12개로 조금 늘려봤어
      id: i,
      size: Math.floor(Math.random() * 200) + 150,
      top: Math.floor(Math.random() * 100) + "%",
      left: Math.floor(Math.random() * 100) + "%",
      delay: -(Math.random() * 15) + "s",
      duration: Math.floor(Math.random() * 15) + 15 + "s",
      // 2. 리스트에서 랜덤하게 컬러 선택
      color: colorList[Math.floor(Math.random() * colorList.length)]
    }));
  }, []);

  // 보안 연락처 정보
  const secretPhone = "MDEwLjM3NjYuNTg4MA==";
  const secretMail = "Y2hvb2xvb3NzQG5hdmVyLmNvbQ==";
  const [contactInfo, setContactInfo] = useState({
    phone: "번호 (Click)",
    email: "메일 (Click)",
    isPhoneShow: false,
    isMailShow: false,
  });

  const handleReveal = (type) => {
    if (type === 'phone' && !contactInfo.isPhoneShow) {
      setContactInfo(prev => ({ ...prev, phone: window.atob(secretPhone), isPhoneShow: true }));
    }
    if (type === 'email' && !contactInfo.isMailShow) {
      setContactInfo(prev => ({ ...prev, email: window.atob(secretMail), isMailShow: true }));
    }
  };

  // 경험 섹션에서 더보기 상태 관리
  const [visibleExpCount, setVisibleExpCount] = useState(2); // 기본 2개 노출

  // 탭 및 더보기 상태 관리
  const [activeTab, setActiveTab] = useState('new');
  const [visibleCount, setVisibleCount] = useState(8);

  // 필터링 로직
  const filteredList = portfolioList.filter(item => item.category === activeTab);
  const displayList = filteredList.slice(0, visibleCount);

  return (
    <div className="home-wrapper">

      {/* [수정] 배경 전용 레이어: 컨텐츠 뒤에 깔림 */}
      <div className="bg-container" aria-hidden="true">
        {bgShapes.map(shape => (
          <div 
            key={shape.id}
            className="bg-shape"
            style={{
              width: shape.size,
              height: shape.size,
              top: shape.top,
              left: shape.left,
              backgroundColor: shape.color, // 랜덤 컬러 적용
              animationDelay: shape.delay,
              animationDuration: shape.duration,
              opacity: 0.3 // 투명도를 여기서 조절하면 편해!
            }}
          />
        ))}
      </div>

      {/* [수정] 컨텐츠 레이어: 배경보다 위(z-index)에 위치 */}
      <div className="content-layer">
        {/* 1. About 섹션 */}
        <section className="about-section">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-content"
            >
              <span className="badge">Web Publisher & Front-end</span>
              <h1 className="title">
                안녕하세요, <br/>
                사용자가 머무는 모든 순간을 <br/>
                고민하고 만드는 <span>개발자</span>입니다.
              </h1>
              
              <div className="info-grid">
                <div className="info-item">
                  <strong>Name</strong>
                  <span>Kim BeomCheol (1989)</span>
                </div>
                <div className="info-item">
                  <strong>Contact</strong>
                  <span className={`reveal-text ${contactInfo.isPhoneShow ? 'active' : ''}`} onClick={() => handleReveal('phone')}>
                    {contactInfo.phone}
                  </span>
                </div>
                <div className="info-item">
                  <strong>E-Mail</strong>
                  <span className={`reveal-text ${contactInfo.isMailShow ? 'active' : ''}`} onClick={() => handleReveal('email')}>
                    {contactInfo.email}
                  </span>
                </div>
                <div className="info-item">
                  <strong>Location</strong>
                  <span>서울시 강남구 논현동</span>
                </div>
              </div>

              <div className="stack-icons">
                <SiHtml5 title="HTML5" />
                <SiCss3 title="CSS3" />
                <SiJavascript title="JavaScript" />
                <SiVuedotjs title="Vue.js" />
                <SiFigma title="Figma" />
                <SiGithub title="Github" />
              </div>

              <div className="skill-stack">
                <p><strong>Stack</strong> Vue2.0, HTML/CSS, SCSS, JavaScript 등</p>
                <p><strong>Tool</strong> Git, Jira, Bitbucket, Notion, VS Code, Figma, Zeplin 등</p>
                <p><strong>Platform</strong> Cafe24, GnuBoard, GodoMall, MakeShop</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Experience 섹션 */}
        <section className="experience-section">
          <div className="container">
            <h2 className="section-title">Work Experience</h2>
            <div className="exp-timeline">
              {/* slice를 사용해 노출 개수 조절 */}
              {experienceList.slice(0, visibleExpCount).map((exp) => (
                <motion.article 
                  key={exp.id}
                  className="exp-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="exp-left">
                    <span className="period">{exp.period}</span>
                    <h3 className="company">{exp.company}</h3>
                    <strong className="position">{exp.team}</strong>
                    <p className="position">{exp.position}</p>
                  </div>
                  <div className="exp-right">
                    <ul className="task-list">
                      {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
                    </ul>
                    <p className="env"><span>Environment:</span> {exp.environment}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* 더보기 버튼: 전체 개수보다 적게 보이고 있을 때만 노출 */}
            {visibleExpCount < experienceList.length && (
              <div className="more-btn-wrap" style={{ marginTop: '40px' }}>
                <button 
                  className="more-btn" 
                  onClick={() => setVisibleExpCount(prev => prev + 3)} // 클릭 시 3개씩 추가 노출
                >
                  더보기 (More)
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 3. Portfolio 섹션 */}
        <section className="portfolio-section">
          <div className="container">
            <h2 className="section-title">My Projects</h2>

            <nav className="tab-menu">
              <button className={activeTab === 'new' ? 'active' : ''} onClick={() => { setActiveTab('new'); setVisibleCount(8); }}>신규 프로젝트</button>
              <button className={activeTab === 'maintain' ? 'active' : ''} onClick={() => { setActiveTab('maintain'); setVisibleCount(8); }}>유지보수</button>
            </nav>

            <div className="portfolio-grid">
              {displayList.map((item) => (
                <motion.article 
                  key={item.id}
                  className="portfolio-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -12 }}
                  onClick={() => item.isExternal ? window.open(item.path) : navigate(item.path)}
                >
                  <div className="card-image">
                    {item.image ? <img src={item.image} alt={item.title} /> : <div className="placeholder">COMING SOON</div>}
                  </div>
                  <div className="card-body">
                    <header className="card-header">
                      <span className="work-date">{item.date}</span>
                      <span className="contribution">기여도 {item.contribution}</span>
                    </header>
                    <h3>{item.title}</h3>
                    <div className="work-info">
                      <p className="role"><strong>Role:</strong> {item.role}</p>
                      <p className="desc">{item.description}</p>
                    </div>
                    <footer className="tags">
                      {item.tags.map(tag => <span key={tag}>#{tag}</span>)}
                    </footer>
                  </div>
                </motion.article>
              ))}
            </div>

            {visibleCount < filteredList.length && (
              <div className="more-btn-wrap">
                <button className="more-btn" onClick={() => setVisibleCount(prev => prev + 8)}>
                  더보기 (More)
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;