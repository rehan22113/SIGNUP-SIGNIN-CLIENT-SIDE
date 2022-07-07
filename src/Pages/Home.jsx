import React,{createContext} from 'react';
import TopBar from '../Components/Top_bar';
import NavBar from '../Components/Nav_bar';
import CTA  from '../Components/CTA';
import Footer from '../Components/Footer'
import ProductList from '../Components/ProductList';

const User = createContext();
const Home = ()=>{

  return(
    <>
      <TopBar />
      <NavBar />
      <CTA />
      <ProductList />
      <Footer />
    </>
  )
}
export default Home;
export {User}