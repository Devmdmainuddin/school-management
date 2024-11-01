import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="">
            <hr />
            <footer className="flex flex-col justify-center items-center gap-6 p-10  rounded dark:bg-slate-900 dark:text-white">
                <nav className="grid grid-flow-col gap-4">
                    <Link className="text-xs leading-6 text-[#42495b] font-bold uppercase hover:text-[#04d2c8] py-2 border-b-2 border-white hover:border-[#262626] transition-colors duration-500"> courses</Link>
                    <Link className="text-xs leading-6 text-[#42495b] font-bold uppercase hover:text-[#04d2c8] py-2 border-b-2 border-white hover:border-[#262626] transition-colors duration-500"> instructors</Link>
                    <Link className="text-xs leading-6 text-[#42495b] font-bold uppercase hover:text-[#04d2c8] py-2 border-b-2 border-white hover:border-[#262626] transition-colors duration-500"> events</Link>      
                    <Link className="text-xs leading-6 text-[#42495b] font-bold uppercase hover:text-[#04d2c8] py-2 border-b-2 border-white hover:border-[#262626] transition-colors duration-500"> About</Link>
                    <Link className="text-xs leading-6 text-[#42495b] font-bold uppercase hover:text-[#04d2c8] py-2 border-b-2 border-white hover:border-[#262626] transition-colors duration-500"> Services</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <TfiFacebook className="text-xl hover:text-[#04d2c8] transition-all duration-500" />
                        <FaTwitter className="text-xl hover:text-[#04d2c8] transition-all duration-500" />
                        <FaYoutube className="text-xl hover:text-[#04d2c8] transition-all duration-500" />

                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved by Career<span className="text-[#04d2c8]">Hero</span> </p>
                </aside>
            </footer>
        </div>
    );
}

export default Footer;
