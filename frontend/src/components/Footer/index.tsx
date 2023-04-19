const Footer = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-center w-full bg-white bottom-0 h-[3vh]">
      <p className="font-mono text-lg">
        &#169; {new Date().getFullYear()}.<span> Workout Tracker</span>
      </p>
    </footer>
  )
}

export default Footer
