import React from 'react';
import AnnounceBar from "./AnnounceBar";
import MenuBar from "./MenuBar";

import "./header.scss";

const Header = () => {
    return (
        <div className="header">
            <MenuBar />
            <AnnounceBar />
        </div>
    );
};

export default Header;