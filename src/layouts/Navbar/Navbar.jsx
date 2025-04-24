export default function Navbar() {
  return (
    <header className="px-5 py-4">
      <div className="container mx-auto">
        <nav className="flex items-center text-xl" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2 sm:space-x-4 text-xs sm:text-base">
            <li>
              <a href="#" className="hover:text-gray-700">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-gray-400 mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="#" className="hover:text-gray-700">
                Courses
              </a>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-gray-400 mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-500" aria-current="page">
                Course Details
              </span>
            </li>
          </ol>
        </nav>
        <h1 className="text-2xl sm:text-5xl font-semibold mt-6">
          Starting SEO as your Home
        </h1>
      </div>
    </header>
  );
}
