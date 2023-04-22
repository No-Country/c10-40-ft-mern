import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const us = [
  {
    name: 'Maximiliano Arbelais',
    image: 'https://avatars.githubusercontent.com/u/105481641?v=4',
    role: 'Frontend Developer',
    social: {
      github: 'https://github.com/arbelais',
      linkedin: 'https://www.linkedin.com/in/arbelaism/'
    }
  },
  {
    name: 'Mateo Salinas',
    image: 'https://avatars.githubusercontent.com/u/99854895?v=4',
    role: 'Frontend Developer',
    social: {
      github: 'https://github.com/matuumdq',
      linkedin: 'https://www.linkedin.com/in/mateosalinas/'
    }
  },
  {
    name: 'Damián Barera',
    image: 'https://avatars.githubusercontent.com/u/95669607?v=4',
    role: 'Frontend Developer',
    social: {
      github: 'https://github.com/Damian-Barera',
      linkedin: 'https://www.linkedin.com/in/damian-barera/'
    }
  },
  {
    name: 'Diego Yako',
    image: 'https://avatars.githubusercontent.com/u/62260320?v=4',
    role: 'Frontend Developer',
    social: {
      github: 'https://github.com/diegoyako',
      linkedin: 'https://www.linkedin.com/in/diegoyako/'
    }
  },
  {
    name: 'Lucas Macias',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-whale-la-ballena-estreno-brendan-fraser-1673880558.jpg?crop=0.565xw:0.906xh;0.234xw,0.0500xh&resize=1200:*',
    role: 'Backend Developer',
    social: {
      github: 'https://github.com/l-macias',
      linkedin: 'https://www.linkedin.com/in/l-macias/'
    }
  },
  {
    name: 'Yon Roa',
    image: 'https://avatars.githubusercontent.com/u/91107387?v=4',
    role: 'Backend Developer',
    social: {
      github: 'https://github.com/yonroa',
      linkedin: 'https://www.linkedin.com/in/yompa/'
    }
  },
  {
    name: 'Leonardo Garcia',
    image:
      'https://res.cloudinary.com/du2ewwzsg/image/upload/v1681593817/WhatsApp_Image_2023-04-15_at_18.14.34_nwegv4.jpg',
    role: 'Backend Developer',
    social: {
      github: 'https://github.com/Jose-Leonardo',
      linkedin: 'https://www.linkedin.com/in/leonardo-garcia-a14b7924b/'
    }
  }
]

interface Props {
  image: string
  name: string
  role: string
  social: {
    github: string
    linkedin: string
  }
}

const AboutCard = ({ image, name, role, social }: Props): JSX.Element => {
  return (
    <div className="w-full rounded-lg shadow bg-primary-100/10 border-2 border-primary-400/60 hover:border-primary-400 transition-colors px-4 flex flex-col justify-center gap-4 items-center py-8">
      <img
        className="w-32 h-32 object-cover rounded-full shadow-lg"
        src={image}
        alt=" "
      />
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col justify-center items-center gap-1">
          <h5 className="text-xl font-medium text-primary-100">{name}</h5>
          <span className="text-sm text-primary-100/70">{role}</span>
        </div>
        <div className="flex space-x-3">
          <a
            href={social.github}
            className="inline-flex items-center px-4 py-2 text-xl font-medium text-center text-primary-100 rounded-lg focus:ring-4 focus:outline-none bg-[#161b22] border-gray-600  hover:bg-gray-700  hover:border-gray-700  focus:ring-gray-700"
            target="_blank"
            rel="noreferrer">
            <AiFillGithub></AiFillGithub>
          </a>
          <a
            href={social.linkedin}
            className="inline-flex items-center px-4 py-2 text-xl font-medium text-center text-primary-100 rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            target="_blank"
            rel="noreferrer">
            <AiFillLinkedin></AiFillLinkedin>
          </a>
        </div>
      </div>
    </div>
  )
}

const About = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 container px-4 py-4 lg:max-w-screen-lg lg:p-8">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-Barlow font-bold self-start">
          ¿Quiénes somos?
        </h1>
        <p className="font-normal leading-6 text-justify">
          ¡Bienvenidos a Exercify! Estamos emocionados de ayudarlos a alcanzar
          sus objetivos de fitness desde la comodidad de su hogar. En nuestra
          aplicación, encontrarán ejercicios personalizados basados en sus
          necesidades. Ya sea que quieran perder peso, tonificar sus músculos o
          mejorar su resistencia, nuestra app tiene todo lo que necesitan.{' '}
          <br />
          ¡Gracias por elegirnos y esperamos ser parte de su viaje hacia un
          estilo de vida saludable desde casa!
        </p>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-Barlow font-bold self-start">
          Nuestro Equipo
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          {us.map((u) => (
            <AboutCard key={u.name} {...u} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
