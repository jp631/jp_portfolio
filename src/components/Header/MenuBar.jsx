import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faHome, faUser, faBriefcase, faRss, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const menu_bar = () => {
    const styleIcon = {
          color: "rgba(48, 32, 149, 100)"
    }

    const styleMenubar = {
        color: "#ffff",
        color: "red"
    }
    
    return (
        <>
                  <input type="checkBox" id="menuBtn" name="menuBtn"/>
                 <div className="menuBtn">
              <label for="menuBtn">
                  <span className="open">
                  <FontAwesomeIcon icon={ faBars } {...styleMenubar}/>
                  </span>
                  <span className="close">
                    {<FontAwesomeIcon icon={ faTimes } {...styleMenubar}/>}
                  </span>
            </label>
          </div>
        <nav className="nav">
          <ul>
             <li>
                 <a href="#">
                  <FontAwesomeIcon icon={ faHome } {...styleIcon}/>
                    <span>Home</span>
                 </a>
             </li>

             <li>
                 <a href="#">
                    <FontAwesomeIcon icon={ faUser } {...styleIcon}/>
                    <span>About</span>
                 </a>
             </li>

             <li>
                 <a href="#">
                     <FontAwesomeIcon icon={ faBriefcase } {...styleIcon}/>
                    <span>Portfolio</span>
                 </a>
             </li>

             <li>
                 <a href="#">
                     <FontAwesomeIcon icon={ faRss } {...styleIcon}/>  
                    <span>Bolg</span>
                 </a>
             </li>

             <li>
                 <a href="#">
                     <FontAwesomeIcon icon={ faAddressCard } {...styleIcon}/> 
                    <span>Contact</span>
                 </a>
             </li>
          </ul>
        </nav>
    </>);

};

export default menu_bar;