const TextLoader = (): JSX.Element => {
  return (
    <div role="status" className="w-full h-full md:h-1/3 flex flex-col md:gap-3 justify-center p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
        <div className="flex gap-5 justify-between border-b-2 border-gray-700 mb-2 py-2">
            <div className="h-2 w-1/4 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
            <div className="h-2 w-1/4 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
        </div>
        <div className="flex gap-5 justify-between border-b-2 border-gray-700 mb-2 py-2">
            <div className="h-2 w-1/4 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
            <div className="h-2 w-1/4 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
        </div>
        <div className="flex gap-5 justify-between border-b-2 border-gray-700 mb-2 py-2">
            <div className="h-2 w-1/4 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
            <div className="h-2 w-1/4 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
        </div>
        <div className="flex gap-5 justify-between border-b-2 border-gray-700 mb-2 py-2">
            <div className="h-2 w-1/4 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
            <div className="h-2 w-1/4 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
        </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default TextLoader
