import React , {useRef} from 'react' ;
import { FaBars ,FaTimes } from "react-icons/fa";
import './navbar.css' ;



 function NavBar() {
  const navRef = useRef() ;

  const showNavBar = () => {
      navRef.current.classList.toggle("responsive_nav") ;
   }

  return (
    <header>
         <h1 className="title">my website</h1>
         <div className='List'>
         <nav ref={ navRef} >
   
            <a className="List-item" href='/#'>Home</a>
            <a  className="List-item" href='/#'>Eduction</a>
            <a className="List-item" href='/#'>Experience</a>
            <a className="List-item" href='/#'>Projects</a>
          
   
 <button className="nav-btn nav-close-btn" onClick ={ showNavBar}>
   <FaTimes />
 </button>
 </nav>
 <button className="nav-btn " onClick ={ showNavBar}>
   <FaBars />

 </button>
         </div>
      
    </header>
  );
}

export default NavBar ; 
