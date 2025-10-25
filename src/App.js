import ReactDOM from "react-dom/client";
import "../index.css"; 
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

const AppLayout = () => {
  return <div className="app">
    <Header/>
    <Welcome/>
    <About/>
    <Work/>
    <Contact/>
  </div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
