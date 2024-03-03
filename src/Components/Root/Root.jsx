import Navibar from "../Home/Navibar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Navibar></Navibar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;