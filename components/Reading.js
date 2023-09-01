import React from "react";

function Reading() {
  return (
    <div className="mt-6">
      <h2 className="text-[1.8rem] italic font-mono font-medium  lg:text-[2rem] md:text-[2rem]">
       Reading
      </h2>
      <p className="text-[1.15 rem] lg:text-lg md:text-lg">
        I have always been a fan of&nbsp;
        <strong>
          <mark>
            <a
              href="https://en.wikipedia.org/wiki/Nancy_Drew"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nancy Drew
            </a>
            &nbsp;
          </mark>
        </strong>
        a teenage amateur sleuth. I have read like 50 books. So basically I am
        into books (fictional, self-help, autobiography etc.) it&apos;s just not Nancy Drew, I love to hit the books even if they
        are different from my field. <em className="text-[#3e373b]">The Alchemist</em> and <em className="text-[#3e373b]">Sapiens</em> are my favourties.
      </p>
    </div>
  );
}

export default Reading;
