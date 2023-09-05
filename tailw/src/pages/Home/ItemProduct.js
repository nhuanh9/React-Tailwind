export default function ItemProduct({item}) {
    return (
        <>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="w-full bg-amber-500">{item.name}</div>
                <div className="w-full bg-amber-500">{item.price}</div>
            </div>
        </>
    )
}
