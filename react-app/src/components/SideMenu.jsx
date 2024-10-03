function SideMenu({ isMenuVisible }) {
    return (
        <div class = {isMenuVisible ? 'sidebar' : 'sidebar hidden'}>
            <div>
                <a href="/" className = 'sidebar-btn'>Profile</a>
            </div>
            <div>
                <a href="/" className = 'sidebar-btn'>Chat</a>
            </div>
            <div>
                <a href="/" className = 'sidebar-btn'>My Listings</a>
            </div>
            <div className = 'bottom-btn'>
                <a href="/" className = 'sidebar-btn settings'>Settings</a>
            </div>
        </div>
    );
}

export default SideMenu;