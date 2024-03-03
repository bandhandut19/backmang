import Footer from "../Footer/Footer";
import Navibar from "../Home/Navibar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div style={{margin:'auto', width:'80%'}}>
            <Navibar></Navibar>
        </div>
            <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;