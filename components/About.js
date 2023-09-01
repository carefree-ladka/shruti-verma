import React, { forwardRef } from "react";

const About = forwardRef(({ props }, ref) => {
  return (
    <div ref={ref} className="mb-6">
      <h2 className="text-[1.8rem] italic font-mono font-medium lg:text-[2rem] md:text-[2rem]">About</h2>
      <ul className="text-[1.15 rem] lg:text-lg md:text-lg">
        <p>
          I&apos;m a NEET 🧑🏻‍⚕️ aspirant. I have recently cleared NEET. When I&apos;m not studying bio stuff I
          usually go out and chill with my BFF🙄 . And I also take out my phone
          to click some random pictures of my own and others 😂. There are more skylines in my gallery than my own pic. I find happiness in little things.
        </p>
      </ul>
    </div>
  );
});
About.displayName = "About";

export default About;
