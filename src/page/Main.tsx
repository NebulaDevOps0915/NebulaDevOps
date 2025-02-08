import React from "react";

import Sec1 from "../component/Sec1.tsx";
import Sec2 from "../component/Sec2.tsx";
import Sec3 from "../component/Sec3.tsx";
import Sec4 from "../component/Sec4.tsx";
const Main: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main>
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
    </main>
  );
};

export default Main;
