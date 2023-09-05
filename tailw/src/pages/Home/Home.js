import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import {Outlet} from "react-router";

export default function Home() {
    return (
        <>
            <div className="flex flex-wrap">
                <Navbar></Navbar>
                <div className="w-full bg-amber-600 h-60 m-2">Carousel</div>
                <div className="w-1/4 p-1">
                    <Sidebar></Sidebar>
                </div>
                <div className="w-3/4 p-1">
                    <Outlet></Outlet>
                </div>
                {/* Thêm các mục khác theo ý muốn */}
            </div>
        </>
    )
}
