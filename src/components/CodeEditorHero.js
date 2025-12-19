import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const EditorContainer = styled(motion.div)`
  background: rgba(15, 23, 42, 0.95);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 255, 159, 0.2);
  border: 1px solid rgba(0, 255, 159, 0.3);
  max-width: 900px;
  margin: 2rem auto;
  backdrop-filter: blur(10px);
`;

const EditorHeader = styled.div`
  background: rgba(30, 41, 59, 0.8);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 255, 159, 0.2);
`;

const WindowControls = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const WindowButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 10px ${props => props.color};
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Tab = styled.button`
  background: ${props => props.active ? 'rgba(0, 255, 159, 0.1)' : 'transparent'};
  color: ${props => props.active ? '#00ff9f' : '#94a3b8'};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px 6px 0 0;
  cursor: pointer;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  border-bottom: 2px solid ${props => props.active ? '#00ff9f' : 'transparent'};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(0, 255, 159, 0.05);
    color: #00ff9f;
  }

  &::before {
    content: '${props => props.icon}';
    font-size: 1rem;
  }
`;

const StatusBar = styled.div`
  background: rgba(20, 30, 48, 0.9);
  padding: 0.4rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  color: #94a3b8;
  border-top: 1px solid rgba(0, 255, 159, 0.1);
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.status === 'active' ? '#00ff9f' : '#ff006e'};
    animation: ${props => props.status === 'active' ? 'pulse 2s infinite' : 'none'};
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      box-shadow: 0 0 5px #00ff9f;
    }
    50% {
      opacity: 0.5;
      box-shadow: 0 0 15px #00ff9f;
    }
  }
`;

const CodeArea = styled.pre`
  padding: 1.5rem;
  margin: 0;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.8;
  color: #e2e8f0;
  min-height: 350px;
  max-height: 500px;
  overflow-x: auto;

  .keyword { color: #ff006e; font-weight: bold; }
  .function { color: #00d9ff; }
  .string { color: #00ff9f; }
  .comment { color: #64748b; font-style: italic; }
  .variable { color: #fbbf24; }
  .number { color: #a78bfa; }
  .class { color: #ff006e; font-weight: bold; }
  .operator { color: #00d9ff; }
  .terminal-prompt { color: #00ff9f; }
  .terminal-output { color: #94a3b8; }
`;

const LineNumbers = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 1.5rem 0.75rem;
  color: #475569;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.8;
  user-select: none;
  border-right: 1px solid rgba(0, 255, 159, 0.1);
`;

const CodeWrapper = styled.div`
  position: relative;
  padding-left: 3.5rem;
`;

const ModeSelector = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ModeButton = styled.button`
  background: ${props => props.active ? 'rgba(0, 255, 159, 0.2)' : 'transparent'};
  color: ${props => props.active ? '#00ff9f' : '#64748b'};
  border: 1px solid ${props => props.active ? '#00ff9f' : 'rgba(100, 116, 139, 0.3)'};
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 159, 0.1);
    color: #00ff9f;
    border-color: #00ff9f;
  }
`;

const CodeEditorHero = () => {
  const typedRef = useRef(null);
  const [activeTab, setActiveTab] = useState('about');
  const [mode, setMode] = useState('code');
  const [linesOfCode, setLinesOfCode] = useState(0);

  const codeSnippets = {
    about: `<span class="comment">// 👨‍💻 About Me - Software Engineer</span>

<span class="keyword">const</span> <span class="variable">developer</span> = {
  <span class="variable">name</span>: <span class="string">"Omkar Nagansur"</span>,
  <span class="variable">role</span>: <span class="string">"Software Engineer I"</span>,
  <span class="variable">company</span>: <span class="string">"Digital Blanket"</span>,
  <span class="variable">location</span>: <span class="string">"Bangalore, India"</span>,
  
  <span class="variable">expertise</span>: [
    <span class="string">"Full Stack Development"</span>,
    <span class="string">"Microservices Architecture"</span>,
    <span class="string">"Real-time Data Pipelines"</span>,
    <span class="string">"AI/ML Integration"</span>
  ],
  
  <span class="variable">currentlyWorking</span>: {
    <span class="variable">project</span>: <span class="string">"CDC Pipeline with Kafka & Debezium"</span>,
    <span class="variable">scale</span>: <span class="string">"100K+ events/hour"</span>,
    <span class="variable">impact</span>: <span class="string">"Reduced latency from 24hrs to 5s"</span>
  },
  
  <span class="function">getMotivation</span>: () => {
    <span class="keyword">return</span> <span class="string">"As Long As I Live, There Are Infinite Chances! 🚀"</span>;
  }
};

<span class="comment">// Let's build something amazing together!</span>
<span class="variable">console</span>.<span class="function">log</span>(<span class="variable">developer</span>.<span class="function">getMotivation</span>());`,

    skills: `<span class="comment">// 🛠️ Technical Arsenal</span>

<span class="keyword">class</span> <span class="class">TechStack</span> {
  <span class="keyword">constructor</span>() {
    <span class="keyword">this</span>.backend = [
      <span class="string">"Spring Boot"</span>, <span class="string">"Django"</span>, <span class="string">"Node.js"</span>, <span class="string">"FastAPI"</span>
    ];
    
    <span class="keyword">this</span>.frontend = [
      <span class="string">"React"</span>, <span class="string">"JavaScript ES6+"</span>, <span class="string">"HTML5/CSS3"</span>
    ];
    
    <span class="keyword">this</span>.dataEngineering = [
      <span class="string">"Apache Kafka"</span>, <span class="string">"Debezium CDC"</span>, 
      <span class="string">"Apache Superset"</span>, <span class="string">"Kafka Streams"</span>
    ];
    
    <span class="keyword">this</span>.databases = [
      <span class="string">"MySQL"</span>, <span class="string">"PostgreSQL"</span>, 
      <span class="string">"MongoDB"</span>, <span class="string">"SQLite"</span>
    ];
    
    <span class="keyword">this</span>.devOps = [
      <span class="string">"Docker"</span>, <span class="string">"Kubernetes"</span>, 
      <span class="string">"Git"</span>, <span class="string">"CI/CD"</span>
    ];
    
    <span class="keyword">this</span>.aiML = [
      <span class="string">"LangChain"</span>, <span class="string">"BERT"</span>, 
      <span class="string">"ViT"</span>, <span class="string">"Wav2Vec2"</span>
    ];
  }
  
  <span class="function">getExpertiseLevel</span>(<span class="variable">domain</span>) {
    <span class="keyword">const</span> <span class="variable">levels</span> = {
      <span class="string">"Backend"</span>: <span class="number">90</span>,
      <span class="string">"Frontend"</span>: <span class="number">85</span>,
      <span class="string">"DevOps"</span>: <span class="number">75</span>,
      <span class="string">"AI/ML"</span>: <span class="number">65</span>
    };
    <span class="keyword">return</span> <span class="variable">levels</span>[<span class="variable">domain</span>] <span class="operator">||</span> <span class="string">"Learning..."</span>;
  }
}

<span class="keyword">const</span> <span class="variable">mySkills</span> = <span class="keyword">new</span> <span class="class">TechStack</span>();
<span class="variable">console</span>.<span class="function">log</span>(<span class="string">"Backend Expertise:"</span>, <span class="variable">mySkills</span>.<span class="function">getExpertiseLevel</span>(<span class="string">"Backend"</span>) <span class="operator">+</span> <span class="string">"%"</span>);`,

    terminal: `<span class="terminal-prompt">omkar@portfolio:~$</span> <span class="terminal-output">cat achievements.txt</span>

<span class="comment"># 🏆 Recent Achievements</span>

<span class="terminal-output">✓ Google Agentic AI Hackathon - Finalist (2024)</span>
<span class="terminal-output">✓ Built CDC Pipeline processing 100K+ events/hour</span>
<span class="terminal-output">✓ Reduced data latency by 99.9% (24hrs → 5s)</span>
<span class="terminal-output">✓ Deployed microservices supporting 500+ concurrent users</span>

<span class="terminal-prompt">omkar@portfolio:~$</span> <span class="terminal-output">./show_projects.sh</span>

<span class="comment"># 🚀 Featured Projects</span>

<span class="terminal-output">[1] Deepfake Detection using VLMs</span>
    <span class="terminal-output">→ Multimodal AI system with BERT, ViT, Wav2Vec2</span>
    <span class="terminal-output">→ FastAPI + MongoDB + JWT + Blockchain</span>

<span class="terminal-output">[2] Real-time CDC Pipeline</span>
    <span class="terminal-output">→ Debezium + Kafka + Docker orchestration</span>
    <span class="terminal-output">→ 99.9% reliability, 5s latency</span>

<span class="terminal-output">[3] LangChain Q&A Tool</span>
    <span class="terminal-output">→ NLP + Sentiment Analysis + Multilingual</span>
    <span class="terminal-output">→ Advanced text-to-speech integration</span>

<span class="terminal-prompt">omkar@portfolio:~$</span> <span class="terminal-output">echo "Let's collaborate!"</span>
<span class="terminal-output">Let's collaborate! 🤝</span>

<span class="terminal-prompt">omkar@portfolio:~$</span> <span class="operator">▊</span>`
  };

  useEffect(() => {
    const currentCode = codeSnippets[activeTab];
    const lines = currentCode.split('\n').length;
    setLinesOfCode(lines);

    const typed = new Typed(typedRef.current, {
      strings: [currentCode],
      typeSpeed: mode === 'fast' ? 5 : 15,
      backSpeed: 10,
      loop: false,
      showCursor: true,
      cursorChar: '▊',
      contentType: 'html'
    });

    return () => typed.destroy();
  }, [activeTab, mode]);

  return (
    <EditorContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <EditorHeader>
        <WindowControls>
          <WindowButton color="#ff5f56" />
          <WindowButton color="#ffbd2e" />
          <WindowButton color="#27c93f" />
        </WindowControls>
        
        <TabContainer>
          <Tab 
            active={activeTab === 'about'} 
            onClick={() => setActiveTab('about')}
            icon="👨‍💻"
          >
            about.js
          </Tab>
          <Tab 
            active={activeTab === 'skills'} 
            onClick={() => setActiveTab('skills')}
            icon="🛠️"
          >
            skills.js
          </Tab>
          <Tab 
            active={activeTab === 'terminal'} 
            onClick={() => setActiveTab('terminal')}
            icon="⚡"
          >
            terminal
          </Tab>
        </TabContainer>

        <ModeSelector>
          <ModeButton active={mode === 'code'} onClick={() => setMode('code')}>
            CODE
          </ModeButton>
          <ModeButton active={mode === 'fast'} onClick={() => setMode('fast')}>
            FAST
          </ModeButton>
        </ModeSelector>
      </EditorHeader>

      <CodeWrapper>
        <LineNumbers>
          {Array.from({ length: linesOfCode }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </LineNumbers>
        <CodeArea>
          <span ref={typedRef}></span>
        </CodeArea>
      </CodeWrapper>

      <StatusBar>
        <StatusItem status="active">
          <div className="dot"></div>
          <span>Connected to Portfolio Server</span>
        </StatusItem>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span>UTF-8</span>
          <span>JavaScript</span>
          <span>Ln {linesOfCode}</span>
        </div>
      </StatusBar>
    </EditorContainer>
  );
};

export default CodeEditorHero;
