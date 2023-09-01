import ToggleDark from "./ToggleDark";

function Header(props) {
  return (
    <header className="fixed top-0 right-0 bg-[#232B2B] text-[#FFFFFF] tracking-wide text-xl w-screen h-12 z-10 ">
      <nav className="flex items-center justify-end pt-2 mr-2">
        <ul className="flex  items-center justify-end space-x-5 pr-5 text-bold text-[1.15 rem] lg:text-lg md:text-lg ">
      <ToggleDark />
          <li className="cursor-pointer hover:text-[#bbb]" onClick={props.gotoAbout}>About</li>
          <li className="cursor-pointer hover:text-[#bbb]" onClick={props.gotoHobbies}>Hobbies</li>
          <li className="cursor-pointer hover:text-[#bbb]" onClick={props.gotoWork}>Work</li>
          <li className="cursor-pointer hover:text-[#bbb]" onClick={props.gotoEvent}>Wishing</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
