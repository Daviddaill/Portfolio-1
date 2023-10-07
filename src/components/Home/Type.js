import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [        
          "a junior Front End Developer,",
          "Committed to creating pleasant and well-designed applications.",
          "I wish you a pleasant visit...",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 2,
      }}
    />
  );
}

export default Type;
