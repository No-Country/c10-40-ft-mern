const Footer = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-white bottom-0">
      <div className="flex items-center justify-center w-full">
        <p className="font-mono">
          &#169; {new Date().getFullYear()}.<span> Workout Tracker</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
