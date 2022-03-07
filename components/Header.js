import React from "react";

function Header() {
  return (
    <header className="fixed top-0 right-0 bg-[#232B2B] text-[#FFFFFF] tracking-wide text-xl w-screen h-12 z-10">
      <nav className="flex items-center justify-end pt-2">
        <ul className="flex  items-center justify-end space-x-5 pr-5 text-bold ">
          <li className="cursor-pointer hover:text-[#bbb]">About</li>
          <li className="cursor-pointer hover:text-[#bbb]">Hobbies</li>
          <li className="cursor-pointer hover:text-[#bbb]">Work</li>
          <li className="cursor-pointer hover:text-[#bbb]">Events</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
