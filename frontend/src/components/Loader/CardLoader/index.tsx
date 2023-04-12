const CardLoader = (): JSX.Element => {
  return (
    <div
      role="status"
      className="w-full h-full md:h-1/2 flex flex-col md:gap-10 justify-center items-center p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
      <svg
        className="text-gray-200 w-32 h-32 dark:text-gray-700"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clipRule="evenodd"></path>
      </svg>
      <div className="w-3/4 flex flex-col gap-3">
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default CardLoader
