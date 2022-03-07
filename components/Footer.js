export default function Footer() {
  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className=" mt-5">
      <footer className="text-lg flex items-center justify-center">
        <div className="text-[#DE1D8D] hover:text-white">
          <p>© Copyright {new Date().getFullYear()}. Made with ☕ and ❤️.</p>
        </div>
        <div className="h-8 w-8 bg-[#282828] text-white flex items-center justify-center rounded-full absolute right-10">
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
