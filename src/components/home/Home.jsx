import React from 'react';
import "./home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {

    const styleMedia = {
        color: "#ffff"
  }

    return (
        <div className="home">
            <div className="sub_home">
            <p>
                <span className="hello_text">Hey There!</span>
                <span className="name">I am Jerry Prophete.</span>
                <span className="title">Web Developer</span>
            </p>
                <span className="styleMedia">
                    <a>
                        <FontAwesomeIcon icon={faFacebook}  style={styleMedia} />
                    </a>
                    <a>
                         <FontAwesomeIcon icon={faInstagram}  style={styleMedia} />
                    </a>
                    <a>
                       <FontAwesomeIcon icon={faTwitter}  style={styleMedia} />
                    </a>
                    <a>
                    <FontAwesomeIcon icon={faGithub}  style={styleMedia} />
                    </a>
                    <a>
                      <FontAwesomeIcon icon={faLinkedin}  style={styleMedia} />
                    </a>
                </span>

                    <a href="#" className="buttons"> Hire me</a>    
            </div>
        </div>
    );
};

export default Home;