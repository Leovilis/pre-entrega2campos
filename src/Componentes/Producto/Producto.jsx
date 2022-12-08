import { Link } from "react-router-dom";

const Producto =()=>{
    const productos =[{
        id:'1',
        nombre:'zapatillas'
    },
    {
        id:'2',
        nombre:'Polera'
    },
    {
        id:'3',
        nombre:'Pantalon'
    }
    ]
    

    return( 
    <div>
        <h1>Producto</h1>
        {
            productos.map((producto)=>{
                return <div className="navbar__menu"><Link to={`/detalleproducto/${producto.id}`}>{producto.nombre}</Link></div>
            })
        }
    </div>
    )
}

export default Producto;