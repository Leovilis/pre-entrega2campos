import { useParams } from "react-router-dom";

const Detalle = ()=>{
    const{idproducto}= useParams();
       return(
        <div>
            <h1>Detalle de Producto {idproducto}</h1>
            <img width={150} height={100} src="http://res.cloudinary.com/hdsqazxtw/image/upload/v1570710978/coderhouse.jpg" alt="Coderhouse" />
            <h3>Detalle</h3>
        </div>
    )
}

export default Detalle;