import { products } from "../utils/data";
import ComputerIcon from '@mui/icons-material/Computer';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Fade, Zoom } from "react-awesome-reveal";

const Portfolio = () => {
  return (
    <section id="portfolio" className="container flex items-center mx-auto px-8 mt-4 md:mt-16 md:px-14 lg:px-32 w-full">
      <div className="w-full z-10 h-full">
        <Zoom triggerOnce direction="down">
          <h2 className="secondary-title">Portfolio</h2>
        </Zoom>
        <p className="section-paragraph">I’ve had the pleasure of designing and implementing both frontend and backend.</p>

        <div className="md:h-full flex items-center text-gray-600">
          <div className="flex flex-wrap -m-4">
            
            {products.map((p) => (
              <div key={p.id} className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="h-full border border-nav ease-in rounded-lg overflow-hidden">
                  <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                        src={p.img} alt={p.title} />
                  <div className="p-6 h-full hover:bg-blue-700 hover:text-white">

                    <Fade cascade triggerOnce>
                      <h2 className="text-base font-medium text-indigo-300 mb-1">{p.subtitle}</h2>
                      <h1 className="text-2xl font-semibold mb-3">{p.title}</h1>
                      <p className="leading-relaxed mb-3">{p.description}</p>
                      <div className="flex items-center flex-wrap justify-evenly">
                        <a href={p.live} target="_blank" rel="noreferrer"><ComputerIcon className="hover:text-indigo-300" /></a>
                          {p.youtube && <a href={p.youtube} target="_blank" rel="noreferrer"><YouTubeIcon className="hover:text-indigo-300 ease-in" /></a>}
                        <a href={p.github} target="_blank" rel="noreferrer"><GitHubIcon className="hover:text-indigo-300 ease-in" /></a>
                      </div>
                    </Fade>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
  </section>
  )
}

export default Portfolio
