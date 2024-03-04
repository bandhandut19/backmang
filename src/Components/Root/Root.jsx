import Footer from "../Footer/Footer";
import Navibar from "../Home/Navibar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <div style={{ margin: 'auto', width: '80%' }}>
                <Navibar></Navibar>
            </div>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Root;