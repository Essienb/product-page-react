import Logo from "./Logo";
import Menu from "./Menu";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="d-flex mx-auto">
              <Logo />
              <Menu />  
            </div>    
        </nav>
    )
}
export default Navbar;