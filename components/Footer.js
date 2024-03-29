export default function Footer() {
  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className=" mt-5 pb-10">
      <footer className="relative text-lg flex items-center justify-center">
        <div className="text-[#DE1D8D] text-[1.15 rem] lg:text-lg md:text-lg pt-2 ">
          <p className="tracking-wide">© Copyright {new Date().getFullYear()}. Made with ☕ and ❤️.</p>
        </div>
        <div className="h-8 w-8 bg-[#282828] text-white hover:bg-[#000] lg:flex md:flex md:justify-center  lg:items-center lg:justify-center rounded-full absolute right-0 hidden">
          <button onClick={handleScrollToTop}>
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
