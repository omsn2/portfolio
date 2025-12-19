import { useEffect } from 'react';

const ConsoleEasterEgg = () => {
  useEffect(() => {
    // ASCII Art
    const asciiArt = `
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║   ██████╗ ███╗   ███╗██╗  ██╗ █████╗ ██████╗                ║
    ║  ██╔═══██╗████╗ ████║██║ ██╔╝██╔══██╗██╔══██╗               ║
    ║  ██║   ██║██╔████╔██║█████╔╝ ███████║██████╔╝               ║
    ║  ██║   ██║██║╚██╔╝██║██╔═██╗ ██╔══██║██╔══██╗               ║
    ║  ╚██████╔╝██║ ╚═╝ ██║██║  ██╗██║  ██║██║  ██║               ║
    ║   ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝               ║
    ║                                                               ║
    ║              🚀 Software Engineer | Full Stack Developer      ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
    `;

    // Styled console messages
    const styles = {
      title: 'font-size: 20px; font-weight: bold; color: #00ff9f; text-shadow: 0 0 10px #00ff9f;',
      subtitle: 'font-size: 14px; color: #00d9ff; font-weight: bold;',
      text: 'font-size: 12px; color: #e2e8f0;',
      highlight: 'font-size: 12px; color: #ff006e; font-weight: bold;',
      code: 'font-size: 11px; color: #fbbf24; font-family: "Fira Code", monospace; background: #1e293b; padding: 2px 6px; border-radius: 3px;',
      success: 'font-size: 12px; color: #00ff9f; font-weight: bold;',
    };

    // Clear console and display messages
    console.clear();
    console.log('%c' + asciiArt, 'color: #00ff9f; font-family: monospace;');
    
    console.log('%c👋 Hey there, fellow developer!', styles.title);
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00ff9f;');
    
    console.log('%c\n🔍 I see you\'re checking out the console. I like your style!', styles.subtitle);
    console.log('%c\nLooks like we both appreciate the developer tools. Let\'s connect!\n', styles.text);
    
    console.log('%c📧 Email:', styles.highlight);
    console.log('%c   omusnagansur989@gmail.com', styles.code);
    
    console.log('%c\n🔗 LinkedIn:', styles.highlight);
    console.log('%c   https://www.linkedin.com/in/omkarsn/', styles.code);
    
    console.log('%c\n💻 GitHub:', styles.highlight);
    console.log('%c   https://github.com/omsn2', styles.code);
    
    console.log('%c\n🧩 LeetCode:', styles.highlight);
    console.log('%c   https://leetcode.com/u/omsn529/', styles.code);
    
    console.log('%c\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00ff9f;');
    
    console.log('%c\n💡 Fun Commands to Try:', styles.subtitle);
    console.log('%c   Type %cshowSkills()%c to see my tech stack', styles.text, styles.code, styles.text);
    console.log('%c   Type %cshowProjects()%c to see my featured projects', styles.text, styles.code, styles.text);
    console.log('%c   Type %chireMe()%c to get my contact info', styles.text, styles.code, styles.text);
    
    console.log('%c\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'color: #00ff9f;');

    // Define interactive functions
    window.showSkills = () => {
      console.clear();
      console.log('%c🛠️ Technical Skills', styles.title);
      console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00ff9f;');
      console.log('%c\n📋 Languages:', styles.subtitle);
      console.log('%c   • C++, Java, Python, JavaScript', styles.text);
      console.log('%c\n⚛️ Frameworks:', styles.subtitle);
      console.log('%c   • React, Django, Spring Boot, LangChain', styles.text);
      console.log('%c\n🔧 Tools:', styles.subtitle);
      console.log('%c   • Docker, Kubernetes, Git, VSCode', styles.text);
      console.log('%c\n💾 Databases:', styles.subtitle);
      console.log('%c   • MySQL, MongoDB, PostgreSQL, SQLite', styles.text);
      console.log('%c\n☁️ Cloud & DevOps:', styles.subtitle);
      console.log('%c   • Kafka, Debezium, Apache Superset, Microservices', styles.text);
      console.log('%c\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'color: #00ff9f;');
    };

    window.showProjects = () => {
      console.clear();
      console.log('%c🚀 Featured Projects', styles.title);
      console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00ff9f;');
      console.log('%c\n1️⃣ CDC Pipeline with Debezium & Kafka', styles.subtitle);
      console.log('%c   Real-time data streaming processing 100K+ events/hour', styles.text);
      console.log('%c\n2️⃣ LangChain Q&A Tool', styles.subtitle);
      console.log('%c   Advanced NLP with sentiment analysis & multilingual support', styles.text);
      console.log('%c\n3️⃣ Hospital Management System', styles.subtitle);
      console.log('%c   Full-stack Spring Boot application with Spring Security', styles.text);
      console.log('%c\n4️⃣ IoT Energy Monitoring', styles.subtitle);
      console.log('%c   Real-time monitoring with React dashboard', styles.text);
      console.log('%c\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'color: #00ff9f;');
    };

    window.hireMe = () => {
      console.clear();
      console.log('%c💼 Let\'s Work Together!', styles.title);
      console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00ff9f;');
      console.log('%c\n✨ I\'m currently working as a Software Engineer at Digital Blanket', styles.text);
      console.log('%c   but I\'m always open to exciting opportunities!\n', styles.text);
      console.log('%c📧 Email: %comusnagansur989@gmail.com', styles.highlight, styles.code);
      console.log('%c📱 Phone: %c+91 8623072529', styles.highlight, styles.code);
      console.log('%c📍 Location: %cBangalore, India', styles.highlight, styles.code);
      console.log('%c\n🔗 Connect with me:', styles.subtitle);
      console.log('%c   LinkedIn: https://www.linkedin.com/in/omkarsn/', styles.text);
      console.log('%c   GitHub: https://github.com/omsn2', styles.text);
      console.log('%c\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'color: #00ff9f;');
    };

    // Secret Konami Code easter egg
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    const handleKonami = (e) => {
      konamiCode.push(e.key);
      konamiCode = konamiCode.slice(-10);
      
      if (konamiCode.join(',') === konamiSequence.join(',')) {
        console.clear();
        console.log('%c🎮 KONAMI CODE ACTIVATED! 🎮', 'font-size: 24px; color: #ff006e; font-weight: bold; text-shadow: 0 0 20px #ff006e;');
        console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ff006e;');
        console.log('%c\n🏆 Achievement Unlocked: True Developer!', styles.success);
        console.log('%c\n   You found the secret! Here\'s a special message:', styles.text);
        console.log('%c\n   "The best way to predict the future is to invent it." - Alan Kay\n', 'font-size: 14px; color: #fbbf24; font-style: italic;');
        console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'color: #ff006e;');
        
        // Reset
        konamiCode = [];
      }
    };

    document.addEventListener('keydown', handleKonami);

    return () => {
      document.removeEventListener('keydown', handleKonami);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ConsoleEasterEgg;
