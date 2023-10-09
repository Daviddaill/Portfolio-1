import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [        
          "a junior Front End Developer,",
          "Committed to creating pleasant and well-designed applications.",
          "Enjoy your visit...",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 2,
      }}
    />
  );
}

export default Type;
