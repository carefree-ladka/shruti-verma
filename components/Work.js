import React, { forwardRef } from "react";

const Work = forwardRef(function ({ props }, ref) {
  return (
    <div className="mt-6" ref={ref}>
      <h2 className="text-[1.8rem] font-mono font-medium text-h2 lg:text-[2.3rem] md:text-[2.3rem]">
        Work
      </h2>
      <p className="text-[1.15 rem] lg:text-lg md:text-lg">
        Being a bio π student always lets me do fun stuff at my school. I do
        practicals and study more about&nbsp;
        <mark>
          Homo sapiens π¨ π©, animals, insects, π§¬ and fun-loving π±.{" "}
        </mark>
        Apart from being a nerdπ, I usually love traveling and going places.
        I&apos;ll soon add my work to this section
      </p>
    </div>
  );
});
Work.displayName = "Work";
export default Work;
