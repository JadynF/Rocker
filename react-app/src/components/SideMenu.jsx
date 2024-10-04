function SideMenu({ isMenuVisible, menuLinks, menuNames }) {

    return (
        <div class = {isMenuVisible ? 'sidebar' : 'sidebar hidden'}>
            <div>
                <a href={menuLinks[0]} className = 'sidebar-btn'>{menuNames[0]}</a>
            </div>
            <div>
                <a href={menuLinks[1]} className = 'sidebar-btn'>{menuNames[1]}</a>
            </div>
            <div>
                <a href={menuLinks[2]} className = 'sidebar-btn'>{menuNames[2]}</a>
            </div>
            <div>
                <a href={menuLinks[3]} className = 'sidebar-btn'>{menuNames[3]}</a>
            </div>
        </div>
    );
}

export default SideMenu;