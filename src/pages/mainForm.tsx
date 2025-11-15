import { useState, useRef } from "react";
import "./mainForm.css";
import Header from "./header";
import Hero from "./hero";
import Services from "./services";
import FAQ from "./faq";
import Footer from "./footer";
import AuthModal from "./authModal";



function MainForm() {
  const [activeTab, setActiveTab] = useState("flight");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ایجاد ref برای هر بخش
  const servicesRef = useRef(null);
  const faqRef = useRef(null);
  const homeRef = useRef(null);
  const footerRef = useRef(null);
  

  // تابع برای اسکرول به بخش مورد نظر
  const scrollToSection = (sectionName) => {
    setActiveSection(sectionName);

    switch (sectionName) {
      case "services":
        servicesRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "faq":
        faqRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
     case "footer":
        footerRef.current?.scrollIntoView({ behavior: "smooth" }); 
        break;
      default:
        break;
    }
  };
  const handleLoginClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className="App">
      <Header
        onLoginClick={handleLoginClick}
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />

      {/* بخش هوم */}
      <div ref={homeRef}>
        <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* بخش خدمات */}
      <div ref={servicesRef}>
        <Services />
      </div>

      {/* بخش سوالات متداول */}
      <div ref={faqRef}>
        <FAQ />
   
      </div>
     <div ref={footerRef}>
        <Footer />
   
      </div>
      

      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseModal} />

    </div>
  );
}

export default MainForm;
