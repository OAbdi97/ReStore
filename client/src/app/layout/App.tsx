import { useEffect, useState } from "react"
import { Products } from "../models/product";
import Catalog from "../../features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  function addProduct() {
    setProducts(prevState =>[...prevState, 
      { 
        id: prevState.length + 101,
        name:'product ' + (prevState.length +1), 
        price: (prevState.length + 1) * 100,
        brand: 'some brand',
        description: 'some desc',
        pictureUrl: 'https://picsum.photos/200'
      }])
  }

  return (
    <div >
      <h1>Re-Store</h1>
      <Catalog products={products} addProduct={addProduct}/>
    </div>
  )
}

export default App
