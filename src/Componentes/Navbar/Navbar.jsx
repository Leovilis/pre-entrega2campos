import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = ({menus, categorias})=>{
    return(
        <div className='navbar'>
            {
               menus.map((menu)=>{
                return <Link className='navbar__menu' to={menu.href}>{menu.name}</Link>
               })
            }
            {
            categorias.map((categoria)=>{
                return <Link
                className='navbar__category' to={`category/${categoria.id}`}>{categoria.name}</Link>
                
            })
            }
  
        </div>
    )
}
export default Navbar;