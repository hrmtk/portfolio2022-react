import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavLink, Link } from 'react-router-dom';
import { myIcon } from '../utils/imagePath';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  let Links = [
    {name: 'home', link: "/"},
    {name: 'portfolio', link: "/portfolio"},
    {name: 'skills', link: "/skills"},
    {name: 'contact', link: "/contact"},
  ]

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={`bg-body z-30 w-full h-20 sticky top-0 ${navbar && 'bg-nav opacity-90'}`}>
      <section id="home" className="w-full  md:flex flex justify-between items-center py-6 px-8 mx-auto md:px-14 lg:px-24">
        <Link to="/" className="text-xl text-white font-bold cursor-pointer flex justify-between items-center h-full hover:text-stone-300 duration-300">
            <span className="mr-2">
            <img src={myIcon[0].img} alt="my-icon" />
            </span>
            <div>Hiro Takada</div>
        </Link>
  
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-40 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-90 bg-black':'top-[-490px]'} md:opacity-100 p-3 md:p-0 text-center `}>
          {
            Links.map((link) => (
              <li key={link.name} onClick={() => setOpen(false)} className="md:ml-8 md:my-0 my-7">
                  <NavLink style={({ isActive }) => {
                    return {
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "#3b82f6" : ""
                    };
                  }} to={link.link} >{link.name}</NavLink>
              </li>
            ))
          }
        </ul>

        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <span>
            {open ? (
              <CloseIcon style={{ fontSize: 30 }} />
            ): (
              <MenuOpenIcon style={{ fontSize: 30 }} />
            )}
          </span>
        </div>
      </section>
      
    </nav>
  )
}

export default Navbar
