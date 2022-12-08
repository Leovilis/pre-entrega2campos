import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <div>

            <div >
                <img src={producto.img} />
                <Link to={`/item/${producto.id}`}> <p className="itemlistcontainer__producto__nombre">{producto.name}</p> </Link>
            </div>

        </div>
    )
}

export default Item;