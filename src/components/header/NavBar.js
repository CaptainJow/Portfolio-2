import React , {useRef} from 'react' ;
import { FaBars ,FaTimes } from "react-icons/fa";
import './navbar.css' ;
import {Link} from "react-router-dom" ;
 function NavBar() {
  const navRef = useRef() ;

  const showNavBar = () => {
      navRef.current.classList.toggle("responsive_nav") ;
   }

  return (
 
      <>
      <header>
      <h1 className="title">my website</h1>
         <div className='List'>
         <nav ref={ navRef} >
   
            <Link  to="/#" onClick = { showNavBar}>Home</Link>
            <Link   to="/Education" onClick = { showNavBar}>Education</Link>
            <Link to='/Projects' onClick = { showNavBar}>Projects</Link>
          
   
 <button className="nav-btn nav-close-btn" onClick ={ showNavBar}>
   <FaTimes />
 </button>
 </nav>
 <button className="nav-btn " onClick ={ showNavBar}>
   <FaBars />

 </button>
         </div>
      
    </header>
      </>
        
  );
}

export default NavBar ; 
