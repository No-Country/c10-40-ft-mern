import { AiFillGithub } from 'react-icons/ai'

const Footer = (): JSX.Element => {
  return (
    <footer className="w-full border-t border-primary-400/30 text-primary-100 py-6 px-8 md:px-10 text-lg font-Barlow">
      <div className="flex items-center justify-between">
        <p>
          &#169; {new Date().getFullYear()}
          <span>
            {' '}
            Exercify para{' '}
            <a
              className="text-primary-400/80 hover:text-primary-400 ease-in duration-300"
              href="https://www.nocountry.tech/"
              target="_blank"
              rel="noreferrer">
              No Country
            </a>
          </span>
        </p>
        <a
          href="https://github.com/No-Country/c10-40-ft-mern"
          target="_blank"
          rel="noreferrer">
          <AiFillGithub size={30} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
