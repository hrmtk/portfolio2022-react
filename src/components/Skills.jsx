import { icons } from '../utils/icon';
import { JackInTheBox } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div className="container flex mt-16 items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			<section id="skills" className="w-full h-full">
				<h2 className="secondary-title">Skills</h2>
				<div className="pt-10 w-full flex flex-wrap gap-6">

					{icons.map((icon) => (
						<div key={icon.id} className="flex flex-col border border-nav rounded-lg shadow-md w-full overflow-hidden sm:w-52">
							<JackInTheBox triggerOnce>
							<img src={icon.img} alt={icon.alt} className="w-10 h-10 m-6" />
							</JackInTheBox>
							<h2 className="text-center text-stone-300 px-2 pb-5 font-semibold">{icon.title}</h2>  
							<div className="bg-badge text-stone-400 p-3 text-center hover:bg-blue-700 hover:text-white transition-all duration-500">{icon.skill}
							</div>
						</div>
					))}
					
				</div>
			</section>
			
		</div>
  )
}

export default Skills
