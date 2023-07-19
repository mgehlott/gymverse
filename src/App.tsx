import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Home from "@/components/Home/Home";
import Benifits from "@/components/Benifits/Benifits";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const [isTopofPage, setIsTopOfPage] = useState<boolean>(true);
 
  useEffect(() => {
    const handler = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className="app">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopofPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benifits setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
