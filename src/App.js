import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
    const [theme, setTheme] = useState("light")
    const [toggleBtn, setToggleBtn] = useState("Dark")
   const toggler = ()=>{
     if(theme === "light"){
        setTheme("dark")
        setToggleBtn("Light")
        document.body.style.backgroundColor="black"
        document.body.style.color="grey"
     }
     else{
        setTheme("light")
        setToggleBtn("Dark")
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
     }
   }
  return (
 
  <>
<Navbar title ="Theology" aboutText ="About Theology" mode = {theme} toggler={toggler} toggleBtn ={toggleBtn}/>
<div className="container my-5 w-75">
<TextForm messageHeading="Convert Text" upperBtn ="Uppercase" capitalize="Capitalilze" clear="Clear Word" mode = {theme}
/>
{/* <About/> */}
</div>
  </>

  );
}

export default App;
