
// In a real app, replace <a> with <Link> from react-router-dom

const Navbar = ({ isDark }) => {
    // Sets the class to 'navbar bg-dark' for About and Contact pages, or 'navbar' for Home (transparent)
    const navClass = isDark ? 'navbar bg-dark' : 'navbar'; 
    const linkColor = isDark ? 'text-light' : 'text-light'; // Links are light on both dark nav and header

    return (
        <nav className={navClass}>
            <div className="container">
                <h1 className='logo lg-heading text-light'>WT</h1>
                <ul className='nav-items'>
                    <li className="nav-item">
                        {/* Using #/ for simple client-side routing simulation */}
                        <a href="#/" className={linkColor}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#/about" className={linkColor}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#/contact" className={linkColor}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;