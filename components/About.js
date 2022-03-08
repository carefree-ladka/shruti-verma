import React, { forwardRef } from "react";

const About = forwardRef(({ props }, ref) => {
  return (
    <div ref={ref} className="mb-6">
      <h2 className="text-[1.8rem] font-mono font-medium text-h2 lg:text-[2.3rem] md:text-[2.3rem]">About</h2>
      <ul className="text-[1.15 rem] lg:text-lg md:text-lg">
        <p>
          I&apos;m a 12th standard student studying at Lucknow Public College in
          Lucknow. I&apos;m a&nbsp;
          <mark>bio student. </mark>When I&apos;m not studying bio stuff I
          usually go out and chill with my BFF🙄 . And I also take out my phone
          to click some random pictures of my own and others 😂.
        </p>
      </ul>
    </div>
  );
});
About.displayName = "About";

export default About;
