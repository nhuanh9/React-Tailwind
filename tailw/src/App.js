import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import ListProduct from "./pages/Home/ListProduct";
import ListHotProduct from "./pages/Home/ListHotProduct";
import ListUser from "./pages/Admin/ListUser";
import ListOrder from "./pages/Admin/ListOrder";

function App() {
    return (
        <>
            <Routes>
                <Route element={<Home></Home>} path={''}>
                    <Route element={<ListProduct/>} path={''}></Route>
                    <Route element={<ListHotProduct/>} path={'hot'}></Route>
                </Route>
                <Route element={<Admin></Admin>} path={'admin'}>
                    <Route element={<ListUser/>} path={''}></Route>
                    <Route element={<ListOrder/>} path={'order'}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
