import React from "react";
import IconContainer from "../../assets/Container.svg";
import { FaLocationDot } from "react-icons/fa6";
import { FaTags } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import DashboardIcon from "../../assets/dashboardIcon.svg";
import { FaEllipsisVertical } from "react-icons/fa6";
import { MdInventory2 } from "react-icons/md";
import { Link } from "react-router-dom";
function Sidebar({ navbarToggle, setNavbarToggle }) {
    return (
        <div className={`sm:block sm:w-63.75 w-55 h-screen border-gray-300 border-r  transition-duration-300 ease-in-out ${navbarToggle ? 'block w-63.75' : 'hidden'}`}>
            {/* Sidebar Header */}
            <div className="pt-3 border-gray-300 border-b">
                <div className="flex justify-center items-center mr-8">
                    <Link to="/dashboard">
                        <img src={DashboardIcon} className="w-15 h-15 rounded-full" alt="" srcset="" />
                    </Link>
                    <div className="mr-3 mb-3">
                        <p className="text-sm font-medium">Home inventory</p>
                        <p className="text-sm text-gray-500">Manage your items</p>
                    </div>
                </div>
            </div>
            {/* Sidebar Content */}
            <nav className="p-4">
                <ul>
                    <Link to="/dashboard" className="flex items-center mb-2 p-3 bg-[#EFF6FF] rounded-lg">
                        <img src={IconContainer} className="mr-2" alt="" srcset="" />
                        <span className="text-blue-500">
                            Dashboard
                        </span>
                    </Link>
                    <Link to="/inventory" className="flex items-center mb-2 p-3  rounded-lg hover:bg-[#EFF6FF]">

                        <MdInventory2 className="mr-2" />

                        <span className=" hover:text-blue-500">
                            Inventory
                        </span>
                    </Link>
                    <Link to="/location" className="flex items-center mb-2 p-3  rounded-lg hover:bg-[#EFF6FF]">
                        <FaLocationDot className="mr-2" />

                        <span className=" hover:text-blue-500">
                            Location
                        </span>
                    </Link>
                    <Link to="/labels" className="flex items-center mb-2 p-3  rounded-lg hover:bg-[#EFF6FF]">
                        <FaTags className="mr-2" />
                        <span className="hover:text-blue-500">
                            Labels
                        </span>
                    </Link>
                    <Link to="/reports" className="flex items-center mb-2 p-3  rounded-lg hover:bg-[#EFF6FF]">
                        <FaChartLine className="mr-2" />
                        <span className="hover:text-blue-500">
                            Reports
                        </span>
                    </Link>
                    <Link to="/settings" className="flex border-t border-gray-200 items-center mb-2 p-3  rounded-lg hover:bg-[#EFF6FF]">
                        <FaGear className="mr-2" />
                        <span className="hover:text-blue-500">
                            Settings
                        </span>
                    </Link>
                </ul>
            </nav>
            <div className="absolute bottom-0 w-63.75 p-4 border-t border-gray-300">
                <div className="flex justify-center items-center">
                    <div>
                        <img src="https://picsum.photos/id/237/200/300" className="w-10 h-10 rounded-full" alt="" srcset="" />
                    </div>
                    <div className="mx-2">
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-sm text-gray-500">© 2024 Your Company</p>
                    </div>
                    <FaEllipsisVertical className="ml-2 cursor-pointer text-gray-400" />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
