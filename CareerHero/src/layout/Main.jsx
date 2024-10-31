import { Outlet } from "react-router-dom";
import Navbar from "../components/Share/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar/>
                <div>
                    <Outlet></Outlet>
                </div>
        
        </div>
    );
};

export default Main;