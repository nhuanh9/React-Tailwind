import {useState} from "react";
import ItemProduct from "./ItemProduct";

export default function ListProduct() {
    const [list,setList] = useState([
        {name: 'IP', price: 200},
        {name: 'IP1', price: 200},
        {name: 'IP2', price: 200},
        {name: 'IP3', price: 200},
        {name: 'IP4', price: 200},
        {name: 'SS', price: 200},
        {name: 'SS1', price: 200},
        {name: 'SS2', price: 200},
        {name: 'SS3', price: 200},
    ])
    return (
        <>
            <div className="w-full text-center bg-amber-100">
                <div className="flex flex-wrap">
                    {list.map((item)=> (
                        <ItemProduct item={item}></ItemProduct>
                    ))}
                </div>
            </div>
        </>
    )
}
