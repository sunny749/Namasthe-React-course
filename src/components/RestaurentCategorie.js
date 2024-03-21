import ItemList from "./ItemList"

const RestaurantCategorie=({data,show,showHandler,index})=>{
    return(
        <div>
            <div onClick={()=>showHandler(index)} className="cursor-pointer shadow-lg p-4 w-6/12 mx-auto my-4 bg-gray-100">
                <div className="flex justify-between">
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                <span>{show?'⏫':'⏬'}</span>
                </div>
            {show&&<ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}
export default RestaurantCategorie