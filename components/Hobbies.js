import React, { forwardRef } from "react";

const Hobbies = forwardRef(({ props }, ref) => {
  return (
    <div ref={ref}>
      <h2 className="text-[1.8rem] italic font-mono font-medium lg:text-[2rem] md:text-[2rem]">
        Hobbies
      </h2>
      <div className="text-[1.15 rem] lg:text-lg md:text-lg pl-[1.115rem]">
        <ul>
          <li className="list-disc">
            Dance😊 (love dancing 💃🏻, it&apos;s like it owns me 😂)
          </li>
          <li className="list-disc">Art</li>
          <li className="list-disc">Skating</li>
          <li className="list-disc">Playing badminton</li>
          <li className="list-disc">Love sketching</li>
          <li className="list-disc">Calligraphy (I do it in my spare time)</li>
          <li className="list-disc">I listen to Spotify</li>
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
