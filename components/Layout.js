import NavBar from "./NavBar";
import SideBar from './SideBar';
function Layout({ children }) {
    return (
        <div className='h-screen bg-gray-300 p-10'>
            <div className="container mx-auto">
                <SideBar></SideBar>
                {children}</div>
        </div>
    );
}

export default Layout;