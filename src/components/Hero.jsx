import { Fade, Slide } from "react-awesome-reveal";
import { tech } from "../utils/imagePath";

const Hero = () => {
  return (
    <div className="container mt-16 relative flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <section className="flex flex-wrap md:flex-nowrap">

        <div className="flex flex-wrap justify-center md:justify-start max-w-xl mt-0 md:my-36 z-10">

          <Fade delay={1000}>
            <h1 className="font-bold text-6xl text-stone-300 lg:text-7xl text-center md:text-left">just keep<br/>striving for<br/></h1>
          </Fade>
                
          <Slide >
            <h1 className="font-bold text-6xl text-stone-300 lg:text-7xl text-center md:text-left">progress</h1>
          </Slide>
              
        </div>
        <img key={tech[0].id} src={tech[0].img} alt="technology" className="w-full md:w-3/4 md:absolute mt-0 right-0 z-0" />
          
      </section>

    </div>
  )
}

export default Hero
