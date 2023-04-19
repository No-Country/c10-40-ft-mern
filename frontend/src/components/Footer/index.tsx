import { AiFillGithub } from 'react-icons/ai'

const Footer = (): JSX.Element => {
  return (
    <footer className="w-full border-t border-primary-400/30 text-primary-100 px-8 py-5 text-lg font-Barlow">
      <div className="flex items-center justify-between">
        <p>
          &#169; {new Date().getFullYear()}
          <span>
            {' '}
            Exercify for{' '}
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
          className="text-3xl"
          rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
    </footer>
  )
}

export default Footer
