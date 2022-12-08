import { Productos } from "../../Mock"
import './ItemListContainer.css'
import Item from "../../Item/Item"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer=()=>{
    const [item, setItem] = useState(Productos);
    const { id } = useParams();
    const FilterCategory = new Promise((resolve, eject)=>{
       let newProductos = Productos.filter((p)=>p.category == id)
       resolve(newProductos)
    })
    useEffect(()=>{
        FilterCategory.then((response)=>{
           setItem(response);
        })
    },[id])
    return(
        <div className="itemlistcontainer__producto">
            {
                item.map((producto)=>{
                    return <Item producto={producto}/>
                })
            }
        </div>
    )
}
export default ItemListContainer;