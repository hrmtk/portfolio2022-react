const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5"></div>
      <div className="sm:w-[90%] w-full flex justify-center items-center mt-3">
        <p className="text-title text-sm text-center"><span>&copy;</span>2022 hirotakada | All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer