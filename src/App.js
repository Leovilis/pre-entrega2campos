import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Componentes/Navbar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import {categorias, menus} from './Mock'

function App() {


  return (
    <BrowserRouter className="App">
        <Navbar menus={menus} categorias={categorias}/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/category/:id' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
