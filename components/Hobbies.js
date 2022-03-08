import React, { forwardRef } from "react";

const Hobbies = forwardRef(({ props }, ref) => {
  return (
    <div ref={ref}>
      <h2 className="text-[1.8rem] font-mono font-medium text-h2 lg:text-[2.3rem] md:text-[2.3rem]">
        Hobbies
      </h2>
      <div className="text-[1.15 rem] lg:text-lg md:text-lg pl-[1.115rem]">
        <ul>
          <li className="list-disc">
            Dance😊 (love dancing 💃🏻, it&apos;s like it owns me 😂)
          </li>
          <li className="list-disc">🎤 singing</li>
          <li className="list-disc">Art</li>
          <li className="list-disc">Skating</li>
          <li className="list-disc">Swimming</li>
          <li className="list-disc">Playing badminton</li>
          <li className="list-disc">Love sketching</li>
          <li className="list-disc">Calligraphy (I do it in my spare time)</li>
          <li className="list-disc">
            <span>I listen to</span>
            <img
              src="/jioSaavn.png"
              alt="Spotify picture"
              className="w-6 h-6 list-disc inline-block pl-1 pr-1 object-contain"
            />
            (Yes,I like JioSaavn🙄) and enjoy the music when I&apos;m off from
            work: (<strong>Arijit Singh</strong>)
          </li>
          <li className="list-disc">
            I want to motivate people (Even though I&apos;m not🤣)
          </li>
        </ul>
      </div>
    </div>
  );
});

Hobbies.displayName = "Hobbies";

export default Hobbies;
