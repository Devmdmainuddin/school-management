import { Outlet } from "react-router-dom";
import Navbar from "../components/Share/Navbar";
import Footer from "../components/Share/Footer";


const Main = () => {
    return (
        <div>
            <Navbar/>
                <div>
                    <Outlet></Outlet>
                </div>
        <Footer></Footer>
        </div>
    );
};

export default Main;