import { Outlet } from "react-router-dom";
import Sidebar from "../ui/SIdebar";
import Header from "../ui/Header";

function ProtectedLayout({ navbarToggle, setNavbarToggle }) {
    return (
        <div className="flex h-screen">
            <Sidebar
                navbarToggle={navbarToggle}
                setNavbarToggle={setNavbarToggle}
            />

            <div className="flex-1 flex flex-col">
                <Header
                    navbarToggle={navbarToggle}
                    setNavbarToggle={setNavbarToggle}
                />

                <main className="flex-1 overflow-y-auto bg-transparent p-4">
                    <Outlet /> 
                </main>
            </div>
        </div>
    );
}

export default ProtectedLayout;
