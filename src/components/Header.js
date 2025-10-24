import { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("welcome");


  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  

  return (
    <div className="sidebar">
      <ul>
        <li
          className={activeSection === "welcome" ? "active" : ""}
          onClick={() => {scrollToSection("welcome")
             setActiveSection("welcome")}
          }
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          Welcome
        </li>
        <li
          className={activeSection === "whoiam" ? "active" : ""}
          onClick={() => {scrollToSection("whoiam")
            setActiveSection("whoiam")}
          }
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          Who I am
        </li>
        <li
          className={activeSection === "whatido" ? "active" : ""}
          onClick={() => {
            scrollToSection("whatido")
            setActiveSection("whatido")
          }}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          What I do
        </li>
        <li
          className={activeSection === "connectwithme" ? "active" : ""}
          onClick={() => {
            scrollToSection("connectwithme")
            setActiveSection("connectwithme")
          }}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          Get in touch
        </li>
      </ul>
    </div>
  );
};

export default Header;
