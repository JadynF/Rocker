function SideMenu() {
    return (
        <div class = 'sidebar'>
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
                <a href="/" className = 'sidebar-btn'>Settings</a>
            </div>
        </div>
    );
}

export default SideMenu;