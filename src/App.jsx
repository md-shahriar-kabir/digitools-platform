import { Suspense, useState } from 'react'
import NavBar from './Components/Navbar/NavBar'
import Banner from './Components/Banner/Banner'
import Rating from './Components/Rating/Rating'
import Products from './Components/Products/Products'
import './App.css'
import StepSection from './Components/StepsSection/StepSection'
import Pricing from './Components/Pricing/Pricing'
import Footer from './Components/Footer/Footer'
import WorkFlow from './Components/WorkFlow/WorkFlow'

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const ProductsPromise = fetchProducts();
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar count = {count} />
      <Banner />
      <Rating />
       <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
      }>
        <Products ProductsPromise={ProductsPromise} setCount={setCount} count={count}/>
      </Suspense>
      <StepSection/>
      <Pricing/>
      <WorkFlow/>
      <Footer/>
    </>
  )
}

export default App
