import React, { useState } from 'react';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuVis = (event) => {
        setShowMenu(prev => !prev);
    }

    return (
        <div className = 'header'>
            <h2 onClick = {handleMenuVis}> {showMenu ? 'Showing Menu' : 'Hiding Menu'} </h2>
            <h1> Rockr </h1>
        </div>
    );
}

export default Header;