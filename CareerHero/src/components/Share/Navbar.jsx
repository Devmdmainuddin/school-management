import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

const Navlinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "courses", link: "/about" },
  { id: 3, name: "instructors", link: "/services" },
  { id: 1, name: "events", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
]
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
<div className=" justify-between hidden md:flex border-b py-3 px-6">
  <div className="flex gap-2 items-center text-xs leading-none font-bold tracking-wide uppercase text-[#42495b]">
    <h3 >welcome</h3>
    <span>call +44303333333</span>
    <p>follow us </p>
   <div>

   </div>
    
  </div>
  <div>
<button className="text-xs leading-none font-bold tracking-wide uppercase text-white py-1 px-3 bg-[#04d2c8] rounded-3xl">login</button>
  </div>
</div>

      <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300 " >

        <div className="max-w-[1375px] py-3 px-6 ">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xl  leading-6 text-[#42495b] font-bold capitalize">Career <span className="text-[#04d2c8]">Hero </span> </span>
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {Navlinks.map((item, idx) =>
                  <Link key={idx} className="text-xs leading-6 text-[#42495b] font-bold uppercase hover:text-[#04d2c8] py-2 border-b-2 border-white hover:border-[#262626] transition-colors duration-500"> {item.name}</Link>
                )}


              </ul>
            </nav>
            <div className=" items-center justify-start gap-3 hidden md:flex">
              <FaUserCircle size={50} />
              <div>
                <h1>md.mainuddin</h1>
                <h1 className="text-sm text-slate-500">Premium user</h1>
              </div>
            </div>
            {/* Mobile view  icons */}
            <div className="flex items-center gap-4 md:hidden ">


              {/* Mobile Hamburger icon */}
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className=" cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>

        {/*responsive for   Mobile views*/}

        <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[278px] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-500 md:hidden rounded-r-xl shadow-md`} >
          <div className="card">
            <div className="flex items-center justify-start gap-3">
              <FaUserCircle size={50} />
              <div>
                <h1>md.mainuddin</h1>
                <h1 className="text-sm text-slate-500">Premium user</h1>
              </div>
            </div>
            <nav className="mt-12">
              <ul className="space-y-4 text-lg flex flex-col">
                {Navlinks.map((item, idx) =>
                  <Link key={idx} className="text-xs leading-6 text-[#42495b] font-bold uppercase hover:text-[#04d2c8] py-2 border-b border-[#262626] hover:border-[#04d2c8] transition-colors duration-500"> {item.name}</Link>
                )}
              </ul>
            </nav>
          </div>

          <div className="footer">
            <h1>
              Made with ❤ by <a href="#">md. mainuddin</a>{" "}
            </h1>
          </div>
        </div>
      </div>
    </>

  );
};

export default Navbar;