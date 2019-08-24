import React from "react";
import "./style.css";

// Components
import Landing from "./components/Landing";

const App: React.FC = () => {
  return (
    <div className="min-h-screen primary-blue font-raleway tracking-wider">
      <div className="p-4 ml-2 lg:mx-auto lg:w-4/5">
        <Landing />
      </div>
    </div>
  );
};

export default App;
