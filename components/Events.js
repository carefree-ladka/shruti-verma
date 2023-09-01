import React, { forwardRef } from "react";

const Events = forwardRef(({ props }, ref) => {
  return (
    <div className="mt-6" ref={ref}>
      <h2 className="text-[1.8rem] italic font-mono font-medium lg:text-[2rem] md:text-[2rem]">
        Bucket-list
      </h2>
      <p className="text-[1.15 rem] lg:text-lg md:text-lg">
        I have a bucket list too.
      </p>
    </div>
  );
});
Events.displayName = "Events";

export default Events;
