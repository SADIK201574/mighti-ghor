import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import Slider from "./components/Slider"


function App() {
  return (
   <div>
    <Navbar/>
    <Slider/>

    <h1>Our products</h1>
    <ProductCard/>
   </div>
  )
}

export default App
