function Navbar(){
    return (
        <>
            <div className="navbar">
                <div className="navbar-left-section">
                    <a>RLine</a>
                </div>
                <div className="navbar-right-section">
                    <a className="navbar-right-section-element">Home</a>
                    <a className="navbar-right-section-element">Friends</a>
                    <a className="navbar-right-section-element">Messages</a>
                    <a className="navbar-right-section-element">Profile</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;