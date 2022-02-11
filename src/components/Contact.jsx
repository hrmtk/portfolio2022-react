import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AttentionSeeker } from 'react-awesome-reveal';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="container flex justify-between items-center mx-auto px-8 mt-4 md:mt-16 md:px-14 lg:px-32 w-full">
			<section id="contact" className="w-full">

				<h2 className="secondary-title">Contact</h2>
				<p className="section-paragraph">Feel free to contact me any time.</p>

				<form  name="contact" method="POST" data-netlify="true" className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-8">
					<input type="hidden" name="form-name" value="contact" />
					<div className="space-y-12">
						<div>
							<label className="block mb-4 text-xl font-bold">Name</label>
							<input type="text" id="name" name="name" placeholder="Enter your name" className="w-full border border-input-border bg-input px-4 py-4" required/>
						</div>
						<div>
							<label className="block mb-6 text-xl font-bold">Email</label>
							<input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border border-input-border bg-input px-4 py-4" required/>
						</div>
						<div>
							<label className="block mb-6 text-xl font-bold">Message</label>
							<textarea placeholder="Enter your message" name="message" className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
						</div>

						<AttentionSeeker effect="tada" duration="2000">
							<button type="submit" className="px-6 py-2 bg-theme text-white font-bold hover:bg-blue-500">Send</button>
						</AttentionSeeker>
					</div>

					<div className="md:mt-12">
						<a href="mailto:hirohrmtk@gmail.com" className="text-secondary hover:text-stone-300 underline mt-3 block">hirohrmtk@gmail.com</a>

						<div className="flex mt-10 md:mt-20 space-x-6">
							<a href="https://github.com/hrmtk" className="text-theme hover:text-title" target="_blank" rel="noreferrer">
								<GitHubIcon  style={{ fontSize: 30 }}/>
							</a>
							<a href="https://www.linkedin.com/in/hiro-takada-881b34228" className="text-theme hover:text-title" target="_blank" rel="noreferrer">
								<LinkedInIcon  style={{ fontSize: 30 }}/>
							</a>
						</div>
					</div>
				</form>
				
				<Footer />
			</section>
		</div>
  )
}

export default Contact
