import React, { forwardRef } from "react";
import Reading from "./Reading";

const Events = forwardRef(({ props }, ref) => {
  return (
    <div className="mt-6" ref={ref}>
      <h2 className="text-[1.8rem] font-mono font-medium text-h2 lg:text-[2.3rem] md:text-[2.3rem]">Events</h2>
      <p className="text-[1.15 rem] lg:text-lg md:text-lg">
        I&apos;ve been part of cultural activities in my shcool where I
        participated in singing, dancing etc. Since singing and dancing are part
        of my life, I just get hyped up by &apos;em. I never shy away from being
        a part of cultural activities beacuse being a part of that makes me
        happy. I think everyone should participate in extracurricular
        activities; It makes our fear go away and makes us more socially
        connected.
      </p>
    </div>
  );
});
Events.displayName = "Events";

export default Events;
