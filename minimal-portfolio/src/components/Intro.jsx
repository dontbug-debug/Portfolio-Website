import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white">
        Karthaveerya Jammuladinne
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software & Web Developer
      </p>
      <p className="text-sm max-w-wl mb-6 font-bold">
        I am a Software & Web Developer who has just finished my Bachelor&apos;s
        in Computer Science.
        <br />I am passionate about building excellent software that improves
        the lives of those around me. All of the coding projects listed have
        been worked and collaborated on by me, throughtout my university.
      </p>
    </div>
  );
}

export default Intro;
