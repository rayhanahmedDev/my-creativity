import { NavLink } from "react-router-dom";
import './Navber.css'

const Navber = () => {

    const links = <>
        <li><NavLink className="mr-4 text-[14px] font-medium" to="/">HOME</NavLink></li>
        <li><a className="mr-4 text-[14px] font-medium" href="/">ABOUT ME</a></li>
        <li><NavLink className="mr-4 text-[14px] font-medium" to='/portfolio'>PORTFOLIO</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar border-shadow fixed z-10 lg:px-10 py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-[#c7ecff] rounded-box w-52 text-[#FFFFFF]">
                            {links}
                        </ul>
                    </div>
                    <h2 className="text-3xl font-bold">RAYHAN</h2>
                </div>
                <div className="navbar-end">
                    <nav className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal px-1 text-[#FFFFFF]">
                            {links}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navber;