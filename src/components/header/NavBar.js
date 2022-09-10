import React , {useRef} from 'react' ;
import { FaBars ,FaTimes } from "react-icons/fa";
import './navbar.css' ;
import {Link} from "react-router-dom" ;
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md"  ; 
 function NavBar() {
  const navRef = useRef() ;

  const showNavBar = () => {
      navRef.current.classList.toggle("responsive_nav") ;
   }
   const { t, i18n } = useTranslation();

  return (
 
      <>
      <header>
      <h1><Link className="title" to="/#" onClick = { showNavBar}>SARRAJ</Link></h1>
         <div className='List'>
         <nav ref={ navRef} >
   
            <Link  to="/#" onClick = { showNavBar}>{t("Home")}</Link>
            <Link   to="/Education" onClick = { showNavBar}>{t("Education")}</Link>
            <Link to='/Projects' onClick = { showNavBar}>{t("Projects")}</Link> 
            <div className="dropdown switch">
                 <span ><MdLanguage className="lang-but" /></span>
                 <div className="dropdown-content">
                   <div  className="dropdown-item" onClick={ () => {i18n.changeLanguage("en"); } } >EN</div>
                   <div   className="dropdown-item" onClick={ () => {i18n.changeLanguage("tr"); } } >TR</div>
                   </div>
                  </div>
   
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
