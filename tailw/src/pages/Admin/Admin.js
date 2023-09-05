import Sidebar from "../../components/Sidebar";
import {Outlet} from "react-router";

export default function Admin() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-1/4 p-1">
                    <Sidebar></Sidebar>
                </div>
                <div className="w-3/4 p-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}
