import React from "react";
import "./style.css";

// Components
import Landing from "./components/Landing";

const App: React.FC = () => {
  return (
    <div className="min-h-screen primary-blue">
      <div className="p-4 lg:w-4/5 mx-auto">
        <Landing />
      </div>
    </div>
  );
};

export default App;
