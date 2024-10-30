import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
    const navigate = useNavigate();
    
    return (
        <nav>
            <button onClick={() => navigate('/')}>
                Back to Selection
            </button>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    );
};

export default Nav;
