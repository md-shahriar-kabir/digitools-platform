import { Suspense } from 'react'
import NavBar from './Components/Navbar/NavBar'
import Banner from './Components/Banner/Banner'
import Rating from './Components/Rating/Rating'
import Products from './Components/Products/Products'
import './App.css'

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const ProductsPromise = fetchProducts();

  return (
    <>
      <NavBar />
      <Banner />
      <Rating />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
      }>
        <Products ProductsPromise={ProductsPromise} />
      </Suspense>
    </>
  )
}

export default App
